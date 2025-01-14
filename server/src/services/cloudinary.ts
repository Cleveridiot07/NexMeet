import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath: string): Promise<string> => {
  try {
    console.log('Cloudinary Config:', {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET ? '******' : 'Missing',
    });

    if (!localFilePath) {
      console.error('Local file path is not provided.');
      return '';
    }

    const fileExtension = path.extname(localFilePath).toLowerCase();
    const resourceType = fileExtension === '.pdf' ? 'raw' : 'auto';

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: resourceType,
    });

    console.log('Cloudinary Response:', response);

    if (response.secure_url) {
      console.log('File uploaded to Cloudinary:', response.secure_url);

      // Clean up local file
      fs.unlinkSync(localFilePath);
      return response.secure_url;
    } else {
      console.error('Failed to retrieve secure_url from Cloudinary response.');
      return '';
    }
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);

    // Cleanup local file if an error occurs
    try {
      fs.unlinkSync(localFilePath);
    } catch (err) {
      console.error('Error deleting local file:', err);
    }

    return '';
  }
};

export { uploadOnCloudinary };
