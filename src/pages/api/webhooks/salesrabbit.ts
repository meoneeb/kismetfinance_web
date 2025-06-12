import type { NextApiRequest, NextApiResponse } from "next";
import { type RequestHandler } from "next/dist/server/next";
import Cors from "micro-cors";
import axios from "axios";
const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

// evt {
//   leadData: {
//     actualStatusId: 13,
//     appointment: null,
//     businessName: '',
//     campaignId: null,
//     city: 'Beeliar',
//     country: 'AUS',
//     customFields: {},
//     dateCreated: '2024-01-19T03:23:10+00:00',
//     dateModified: '2024-01-19T03:23:19+00:00',
//     dateOfBirth: null,
//     email: null,
//     firstName: 'Michael ',
//     lastName: null,
//     latitude: -32.1341535004386,
//     leadId: 4251,
//     longitude: 115.8085343241692,
//     notes: null,
//     ownerId: 1,
//     ownerModified: '2024-01-19T03:23:10+00:00',
//     phoneAlternate: null,
//     phonePrimary: '0426475749',
//     postalCode: '6164',
//     ssn: null,
//     state: 'WA',
//     status: 'New Lead',
//     statusId: 5569,
//     statusModified: '2024-01-19T03:23:10+00:00',
//     street1: '121 Tindal Avenue',
//     street2: null,
//     userId: 1
//   },
//   leadId: 4251,
//   leadStatusId: 5569,
//   type: 'leadUpdate'
// }

// Lead Schema:
// {
//   "id": "string",
//   "userName": "string",
//   "userId": "string",
//   "firstName": "string",
//   "lastName": "string",
//   "phonePrimary": "string",
//   "phoneAlternate": "string",
//   "email": "string",
//   "street1": "string",
//   "street2": "string",
//   "city": "string",
//   "state": "string",
//   "zip": "string",
//   "country": "string",
//   "latitude": 0,
//   "longitude": 0,
//   "status": "string",
//   "notes": "string",
//   "files": [
//     {
//       "fileId": 0,
//       "fileName": "string",
//       "fileSize": 0,
//       "dateCreated": "string",
//       "dateModified": "string"
//     }
//   ],
//   "customFields": [
//     {
//       "uniqueKeyName": {
//         "availableOptions": []
//       }
//     }
//   ],
//   "businessName": "string",
//   "appointment": "string",
//   "integrationData": {},
//   "statusModified": "string",
//   "dateCreated": "string",
//   "dateModified": "string"
// }

// curl -X GET https://api.aircall.io/v1/ping \
//      -H "Authorization: Basic {YOUR_ENCODED_STRING}"
// Convert the above into a axios request

interface User {
  id: string;
  userName: string;
  userId: string;
  firstName: string;
  lastName: string;
  phonePrimary: string;
  phoneAlternate: string;
  email: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: number;
  longitude: number;
  status: string;
  notes: string;
  files: File[];
  customFields: CustomField[];
  businessName: string;
  appointment: string;
  integrationData: Record<string, unknown>;
  statusModified: string;
  dateCreated: string;
  dateModified: string;
}

interface File {
  fileId: number;
  fileName: string;
  fileSize: number;
  dateCreated: string;
  dateModified: string;
}

interface CustomField {
  [key: string]: {
    availableOptions: string[];
  };
}

const AIR_CALL_API_ID = "66e93989f5b1f7ec28f508240ca646ae";

const AIR_CALL_API_KEY = "3485695145e22e161962d39cd3e575bd";

// Hubspot form
//
//https://88270af6-4ea9-4884-b27b-5268d1cc9c08-c85294af7b244e7.integration-hook.com
//

// Concatenate the API ID and API Key with a colon (:)
const encodedString = Buffer.from(
  `${AIR_CALL_API_ID}:${AIR_CALL_API_KEY}`
).toString("base64");

const airCallApi = axios.create({
  baseURL: "https://api.aircall.io",
  headers: {
    Authorization: `Basic ${encodedString}`,
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const evt = req.body;
  console.log("evt", evt);

  const leadData = evt.leadData as User;
  const leadId = evt.leadId;
  const leadType = evt.type;
  console.log("Lead data");

  // const { data } = await airCallApi.get("/v1/ping");

  // Get all contacts:
  // const { data: allContacts } = await airCallApi.get("/v1/contacts");
  // console.log("All Contacts", JSON.stringify(allContacts, null, 2));

  // const phoneNumber = leadData.phonePrimary;
  const phoneNumber = leadData.phonePrimary;

  // Format numbers that come through in this form "0426475749" to "61426475749"
  const formatNumbers = (phoneNumber: string) => {
    if (phoneNumber.startsWith("0")) {
      return `+61${phoneNumber.slice(1)}`;
    }
    return phoneNumber;
  };

  const formattedNumber = formatNumbers(phoneNumber);

  // Search for contact by phone number:
  const { data: contactData } = await airCallApi.get(
    `/v1/contacts/search?phone_number=${formattedNumber}`
  );
  // "phonePrimary": "0438618667",

  console.log("Contact data", contactData);

  if (contactData.contacts.length === 0) {
    console.log("No contacts found");
    // Create contact

    //     {
    //   "first_name": "Gary",
    //   "last_name": "Jennings",
    //   "information": "external_custom_id:87123",
    //   "phone_numbers": [
    //     {
    //       "label": "Work",
    //       "value": "+19001112222"
    //     }
    //   ],
    //   "emails": [
    //     {
    //       "label": "Office",
    //       "value": "gary.jennings@acme.com"
    //     }
    //   ]
    // }

    // POST / v1 / contacts;
    try {
      await airCallApi.post("/v1/contacts", {
        first_name: leadData.firstName,
        last_name: leadData.lastName,
        information: `external_custom_id:${leadId}`,
        phone_numbers: [
          {
            label: "Primary",
            value: formatNumbers(leadData.phonePrimary),
          },
        ],
        // emails: [
        //   {
        //     label: "Office",
        //     value: leadData.email,
        //   },
        // ],
      });
    } catch (error) {
      console.log("Error creating contact", error);
    }
  } else {
    console.log("Contact found");
    // Update contact
    // POST /v1/contacts/:id/phone_details
    //     {
    //   "label": "Work",
    //   "value": "+19161110000"
    // }

    await airCallApi.post(`/v1/contacts/${contactData.contacts[0].id}`, {
      first_name: leadData.firstName,
      last_name: leadData.lastName,
      company_name: leadData.businessName || "",
      information: `Address: ${leadData.street1} ${leadData.street2} ${leadData.city}`,
    });

    await airCallApi.post(
      `/v1/contacts/${contactData.contacts[0].id}/phone_details`,
      {
        label: "Mobile",
        value: formattedNumber,
      }
    );
  }

  return res.json({ received: true });
};

export default cors(handler as RequestHandler);
