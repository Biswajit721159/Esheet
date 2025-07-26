const organizations = require("../models/organizations");

const createOrganization = async (req, res) => {
    try {
        const { organizationName, userName, phoneNumber, email } = req.body;
        const organization = await organizations.create({ organizationName, userName, phoneNumber, email });
        res.status(201).json(organization);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getOrgs = async (req, res) => {
    try {
        let data = await organizations.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createOrganization, getOrgs };