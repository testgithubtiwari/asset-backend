import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { createBusiness } from "../controllers/business/createbusiness.controller.js";
import { updateBusinessDetails } from "../controllers/business/updatebusiness.controller.js";
import { joinBusiness } from "../controllers/business/joinbusiness.controller.js";
import getBusinessRequests from "../controllers/business/getbusinessrequest.controller.js";
import { acceptUserJoinRequest } from "../controllers/business/acceptuserjoinrequest.controller.js";
import { getBusinessUsers } from "../controllers/business/getbusinessusers.controller.js";
import { getBusinessAcceptedRequests } from "../controllers/business/getbusinessacceptedrequests.controller.js";
import { declineUserJoinRequest } from "../controllers/business/declinejoinrequest.controller.js";
const router = Router();

router.use(verifyJWT);

// create join business
router.route("/create-business").post(createBusiness);

// update business details
router
  .route("/update-business-deatils/:businessId")
  .patch(updateBusinessDetails);

// join business
router.route("/join-business/:businessCode").post(joinBusiness);

// getBusiness request
router.route("/get-business-request/:businessId").get(getBusinessRequests);

// accept business request
router
  .route("/accept-business-request/:businessId")
  .post(acceptUserJoinRequest);

// businessUser
router.route("/get-business-users/:businessId").get(getBusinessUsers);

// get accepted businessrequest
router
  .route("/get-accepted-business-requests/:businessId")
  .get(getBusinessAcceptedRequests);

// decline the join request of the user
router
  .route("/decline-user-join-request/:businessId")
  .post(declineUserJoinRequest);

export default router;
