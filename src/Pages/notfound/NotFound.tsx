import React from "react";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestoreTwoTone';
function NotFind() {
  return (
    <div className="h-screen flex justify-center gap-4 text-white items-center backdrop-blur-lg bg-[rgba(0,0,0,0.95)]">
        <SettingsBackupRestoreIcon fontSize="large"/>
      <p className="text-3xl">Not-Found</p>
    </div>
  );
}

export default NotFind;
