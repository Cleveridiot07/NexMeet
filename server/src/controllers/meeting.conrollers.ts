import { Request, Response } from "express";
import convertToUnixTimestamp from "../utils/unixTimestamp";
import axios from "axios";

export const generateMeetingId = async (req: Request, res: Response) => {
  const exp = convertToUnixTimestamp();
  console.log(exp);
  const { name } = req.body;

  if (!name) {
    return res.status(500).json({ message: "A unique room name is required" });
  }

  const formdata = {
    name,
    privacy: "private",
    properties: {
      exp,
    },
  };

  // Retrieve the Bearer token from environment variables
  const bearerToken = process.env.DAILY_CO_AUTHORIZATION_TOKEN;

  if (!bearerToken) {
    return res
      .status(500)
      .json({ message: "Bearer token is missing in environment variables" });
  }

  try {
    const response = await axios.post(
      `${process.env.DAILY_CO_URL}/rooms`,
      formdata,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );

    // Log the necessary response data to check the structure
    console.log(response.data);

    // Return only the required data (e.g., room ID and URL) and avoid sending the full response object
    return res.status(200).json({
      roomUrl: response.data.url,
      roomId: response.data.id,
    });
  } catch (err) {
    console.error("Error in Creating Room", (err as any)?.response.data);
    const responseError = (err as any)?.response.data;
    return res.status(500).json(responseError);
  }
};

export const generateMeetingToken = async (req: Request, res: Response) => {
  const { roomName } = req.body;
  if (!roomName) {
    return res.status(500).json({ message: "Room name is required" });
  }
  const formdata = {
    room_name : roomName,
    isowner: "true",
  };
  // Retrieve the Bearer token from environment variables
  const bearerToken = process.env.DAILY_CO_AUTHORIZATION_TOKEN;

  if (!bearerToken) {
    return res
      .status(500)
      .json({ message: "Bearer token is missing in environment variables" });
  }
  try {
    const response = await axios.post(
      `${process.env.DAILY_CO_URL}/rooms`,
      formdata,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );

    // Log the necessary response data to check the structure
    console.log(response.data);

    // Return only the required data (e.g., room ID and URL) and avoid sending the full response object
    return res.status(200).json({
      roomUrl: response.data.url,
      roomId: response.data.id,
    });
  } catch (err) {
    console.error("Error in Creating Room", (err as any)?.response.data);
    const responseError = (err as any)?.response.data;
    return res.status(500).json(responseError);
  }
};
