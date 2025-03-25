import { createClaim } from "../models/claimModel.js";

export const createClaimController = async (req, res) => {
  const {
    claim_no,
    claim_date,
    monthly_rent,
    tenant_id_name,
    landlord_id_name,
    ll_period,
    mobile_no,
    email_id,
    ll_agreement,
    bond_id,
    bond_period,
    ll_expiry_date,
    bond_version,
    bond_value,
    bond_status,
    claim_status,
  } = req.body;

  // Basic validation
  if (
    !claim_no ||
    !claim_date ||
    !monthly_rent ||
    !tenant_id_name ||
    !landlord_id_name
  ) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  try {
    const claim = await createClaim({
      claim_no,
      claim_date,
      monthly_rent,
      tenant_id_name,
      landlord_id_name,
      ll_period,
      mobile_no,
      email_id,
      ll_agreement,
      bond_id,
      bond_period,
      ll_expiry_date,
      bond_version,
      bond_value,
      bond_status,
      claim_status,
    });
    res
      .status(201)
      .json({ message: "Claim created successfully", data: claim });
  } catch (err) {
    console.error("Error creating claim:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
