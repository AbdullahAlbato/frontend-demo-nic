import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Collapse from '@material-ui/core/Collapse';

import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import WatchIcon from '@material-ui/icons/Watch';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import FaceIcon from '@material-ui/icons/Face';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AirlineSeatLegroomExtraIcon from '@material-ui/icons/AirlineSeatLegroomExtra';
import HomeIcon from '@material-ui/icons/Home';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.default,
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
  nestedNested: {
    paddingLeft: theme.spacing(8),
  },
  nestedNestedNested: {
    paddingLeft: theme.spacing(14),
  },
  menuItemSelected: {
        backgroundColor:"#b7b7b7 !important",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px"
  },
  listItemText:{
      color:"rgba(0, 0, 0, 0.54)",
      fontSize: "0.9rem !important",
      marginLeft:"0.9rem"
  },
  listItemIcon : {
    minWidth:0
  }
}));

export default function Sidebar() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [fashionIsOpen, setFashionIsOpen] = React.useState(true);
  const [otherIsOpen, setOtherIsOpen] = React.useState(true);


  const handleFashionClick = () => {
    setFashionIsOpen(!fashionIsOpen);
  };
  const handleOtherClick = () => {
    setOtherIsOpen(!otherIsOpen);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          classes={{ selected: classes.menuItemSelected}}
          className={classes.nested}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <WatchIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="Watches" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          classes={{ selected: classes.menuItemSelected}}
          className={classes.nested}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <PhoneAndroidIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="Mobiles" />
        </ListItem>
        <ListItem button onClick={handleFashionClick}>
            <ListItemIcon className={classes.listItemIcon}>
                {fashionIsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary="Fashion" />
            
        </ListItem>
        <Collapse in={fashionIsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem 
            button
            selected={selectedIndex === 21}
            classes={{ selected: classes.menuItemSelected}}
            onClick={(event) => handleListItemClick(event, 21)}
            className={classes.nestedNested}>
            <ListItemIcon className={classes.listItemIcon}>
              <EmojiPeopleIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary="Men" />
            <span style={{color: "rgba(0, 0, 0, 0.54)"}}>90</span>
          </ListItem>
          <ListItem 
            button
            selected={selectedIndex === 22}
            onClick={(event) => handleListItemClick(event, 22)}
            classes={{ selected: classes.menuItemSelected}}
            className={classes.nestedNested}>
            <ListItemIcon className={classes.listItemIcon}>
              <PregnantWomanIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary="Women" />
            <span style={{color: "rgba(0, 0, 0, 0.54)"}}>2,294</span>
          </ListItem>
          <ListItem 
            button
            selected={selectedIndex === 23}
            onClick={(event) => handleListItemClick(event, 23)}
            classes={{ selected: classes.menuItemSelected}}
            className={classes.nestedNested}>
            <ListItemIcon className={classes.listItemIcon}>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary="Kids" />
            <span style={{color: "rgba(0, 0, 0, 0.54)"}}>3,566</span>
          </ListItem>
          <ListItem 
            button
            selected={selectedIndex === 24}
            onClick={(event) => handleListItemClick(event, 24)}
            classes={{ selected: classes.menuItemSelected}}
            className={classes.nestedNested}>
            <ListItemIcon className={classes.listItemIcon}>
              <LocalMallIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary="Bags" />
            <span style={{color: "rgba(0, 0, 0, 0.54)"}}>733</span>
          </ListItem>
          <ListItem button onClick={handleOtherClick} className={classes.nestedNested}>
            <ListItemIcon className={classes.listItemIcon}>
                {otherIsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary="Other" />
            
        </ListItem>
        <Collapse in={otherIsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem 
                    button
                    selected={selectedIndex === 251}
                    classes={{ selected: classes.menuItemSelected}}
                    onClick={(event) => handleListItemClick(event, 251)}
                    className={classes.nestedNestedNested}>
                    <ListItemIcon className={classes.listItemIcon}>
                    <AirlineSeatLegroomExtraIcon />
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary="Shoes" />
                    <span style={{color: "rgba(0, 0, 0, 0.54)"}}>90</span>
                </ListItem>
            </List>
        </Collapse>
        </List>
      </Collapse>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          classes={{ selected: classes.menuItemSelected}}
          className={classes.nested}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary="Home" />
        </ListItem>
      </List>
    </div>
  );
}
