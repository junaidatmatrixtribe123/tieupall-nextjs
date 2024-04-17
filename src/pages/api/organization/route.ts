// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { dbModels } from "@/models";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    if (req.query.id) {
    } else {
      const organizationList = await dbModels.Organization.findAll();
      res.status(200).json({ data: organizationList });
    }
  }
}
