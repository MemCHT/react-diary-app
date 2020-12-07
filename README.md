## Overview
reactの習作に日記アプリを作っています。

## VSCode Setting

### tsx.code-snippets
```json
{
	"React initialization": {
		"prefix": "react",
		"body":[
			"import React, {FC, useState} from 'react';",
			"import {  } from '@material-ui/core';",
			"import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';",
			"",
			"const useStyles = makeStyles((theme: Theme) => createStyles({",
			"  root: {",
			"",
			"  },",
			"}));",
			"",
			"export const $1: FC = () => {",
			"",				
			"  return ($2);",
			"}",
			"",
			"export default $1;",
		],
		"description": "tsxの初期化用です"
	}
}
```
