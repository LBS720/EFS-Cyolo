const mongoose = require("mongoose");
const UploadModel = require("../models/UploadModel");
const cron = require("node-cron");

async function removeExpiredFiles() {
  try {
    const currentTime = new Date();
    const expiredFiles = await UploadModel.find({
      retentionTime: { $lte: currentTime },
    });

    if (expiredFiles.length > 0) {
      for (const file of expiredFiles) {
        await UploadModel.findByIdAndRemove(file._id);
      }

      console.log(`Removed ${expiredFiles.length} expired files.`);
    } else {
      console.log("No expired files found.");
    }
  } catch (error) {
    console.error("Error removing expired files:", error);
  }
}

cron.schedule("* * * * *", removeExpiredFiles);
