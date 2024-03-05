"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Link from 'next/link';  // Import Link from Next.js
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginMenu from "@/components/include/LoginMenu";

const drawerWidth = 260;

function AsideArge(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="asidebar">
      <div className="logoDashboard">
        <a href="/dashboard-argekullanici">
      <svg width="134" height="37" viewBox="0 0 134 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3182 36H0.0909091L11.6136 1.09091H24.5682L36.0909 36H25.8636L18.2273 10.7045H17.9545L10.3182 36ZM8.40909 22.2273H27.6364V29.3182H8.40909V22.2273ZM39.4531 36V1.09091H54.5213C57.1122 1.09091 59.3793 1.5625 61.3224 2.50568C63.2656 3.44886 64.777 4.80682 65.8565 6.57955C66.9361 8.35227 67.4759 10.4773 67.4759 12.9545C67.4759 15.4545 66.919 17.5625 65.8054 19.2784C64.7031 20.9943 63.152 22.2898 61.152 23.1648C59.1634 24.0398 56.8395 24.4773 54.1804 24.4773H45.1804V17.1136H52.2713C53.3849 17.1136 54.3338 16.9773 55.1179 16.7045C55.9134 16.4205 56.5213 15.9716 56.9418 15.358C57.3736 14.7443 57.5895 13.9432 57.5895 12.9545C57.5895 11.9545 57.3736 11.142 56.9418 10.517C56.5213 9.88068 55.9134 9.41477 55.1179 9.11932C54.3338 8.8125 53.3849 8.65909 52.2713 8.65909H48.9304V36H39.4531ZM59.9077 19.9773L68.6349 36H58.3395L49.8168 19.9773H59.9077ZM94.1861 12.6136C94.0384 12.0114 93.8054 11.483 93.4872 11.0284C93.169 10.5625 92.7713 10.1705 92.294 9.85227C91.8281 9.52273 91.2827 9.27841 90.6577 9.11932C90.044 8.94886 89.3679 8.86364 88.6293 8.86364C87.0384 8.86364 85.6804 9.24432 84.5554 10.0057C83.4418 10.767 82.5895 11.8636 81.9986 13.2955C81.419 14.7273 81.1293 16.4545 81.1293 18.4773C81.1293 20.5227 81.4077 22.2727 81.9645 23.7273C82.5213 25.1818 83.3509 26.2955 84.4531 27.0682C85.5554 27.8409 86.9247 28.2273 88.5611 28.2273C90.0043 28.2273 91.2031 28.017 92.1577 27.5966C93.1236 27.1761 93.8452 26.5795 94.3224 25.8068C94.7997 25.0341 95.0384 24.125 95.0384 23.0795L96.6747 23.25H88.6974V16.5H104.175V21.3409C104.175 24.5227 103.499 27.2443 102.146 29.5057C100.805 31.7557 98.9531 33.483 96.5895 34.6875C94.2372 35.8807 91.5384 36.4773 88.4929 36.4773C85.0952 36.4773 82.1122 35.7557 79.544 34.3125C76.9759 32.8693 74.9702 30.8125 73.527 28.142C72.0952 25.4716 71.3793 22.2955 71.3793 18.6136C71.3793 15.7273 71.8168 13.1705 72.6918 10.9432C73.5781 8.71591 74.8054 6.83523 76.3736 5.30114C77.9418 3.75568 79.7543 2.59091 81.8111 1.80682C83.8679 1.01136 86.0724 0.613635 88.4247 0.613635C90.4929 0.613635 92.4134 0.90909 94.1861 1.5C95.9702 2.07954 97.544 2.90909 98.9077 3.98864C100.283 5.05682 101.391 6.32386 102.232 7.78977C103.072 9.25568 103.584 10.8636 103.766 12.6136H94.1861ZM108.594 36V1.09091H133.753V8.72727H118.071V14.7273H132.457V22.3636H118.071V28.3636H133.685V36H108.594Z" fill="white"/>
</svg></a>

       </div>
      <Divider />
      <List className="listmenu">
        {[
           { text: "Proje Düzenle", link: "/projeduzenleargekullanici" },
           { text: " PDKS Puantaj İşlemleri Günlük", link: "/pdks-gunluk" },
           { text: " PDKS Puantaj İşlemleri Dışarda", link: "/pdks-disarda" },

            { text: "Etkinlikler - Katılım Ekle", link: "/katilimekle" },
           { text: " Etkinlikler - Katılımları Gör", link: "/katilimlarigor" },
           { text: "Fikri Sınai Haklar", link: "/fikrisinai" },
        ].map(({ text, link }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} href={link}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="topMenu"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="flexMenu">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="colorDashboard"
          >
            ARGE Kullanıcı Yönetim Paneli
          </Typography>

          <LoginMenu />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

AsideArge.propTypes = {
  window: PropTypes.func,
};

export default AsideArge;
