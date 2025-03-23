import client from "../config/db.js";

export const createClaim = async (claimData) => {
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
  } = claimData;

  const query = `
        INSERT INTO claims (
            claim_no, claim_date, monthly_rent, tenant_id_name, landlord_id_name, ll_period,
            mobile_no, email_id, ll_agreement, bond_id, bond_period, ll_expiry_date,
            bond_version, bond_value, bond_status, claim_status
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        RETURNING *;
    `;

  const values = [
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
  ];

  try {
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};
