import React, {FC, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton, withStyles, MenuItem, ListItemText, ListItemIcon} from '@material-ui/core';
import { MoreVert } from "@material-ui/icons";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export type Props = {
  items: [
    ...{
      action?: (event: React.MouseEvent<HTMLElement>) => void,
      listItem: React.ReactNode,
      listText: string,
    }[]
  ];
};

export const MoreMenu: FC<Props> = ({items}) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          items.map((item: Props['items'][0], key)=>(
            <StyledMenuItem onClick={item.action} key={key}>
              <ListItemIcon>
                {item.listItem}
              </ListItemIcon>
              <ListItemText primary={item.listText} />
            </StyledMenuItem>
          ))
        }
      </StyledMenu>
    </div>
  );
}

export default MoreMenu;