import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || '',
  api_key: process.env.CLOUDINARY_API_KEY || '',
  api_secret: process.env.CLOUDINARY_API_SECRET || '',
});

const uploadOnCloudinary = async (localFilePath: string): Promise<string> => {
  try {
    if (!localFilePath) {
      console.error("Local file path is not provided.");
      return "";
    }

    const fileExtension = path.extname(localFilePath).toLowerCase();
    let resourceType: 'image' | 'raw' | 'auto' = 'auto';

    if (fileExtension === '.pdf') {
      resourceType = 'raw';
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: resourceType,
    });

    console.log("Cloudinary Response:", response);

    if (response.secure_url) {
      console.log("File uploaded on Cloudinary", response.secure_url);
      // Clean up the local file after uploading.
      try {
        fs.unlinkSync(localFilePath);
      } catch (err) {
        console.error("Error deleting local file after upload:", err);
      }
      return response.secure_url; // Return only the secure_url as a string.
    } else {
      console.error("Failed to get secure_url from Cloudinary response.");
      return "";
    }
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    try {
      fs.unlinkSync(localFilePath); // Remove the file locally in case of an error.
    } catch (err) {
      console.error("Error deleting local file on failure:", err);
    }
    return "";
  }
};

export { uploadOnCloudinary };
