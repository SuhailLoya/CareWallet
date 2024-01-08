const { createFundraiser } = require("./createFundraiser");
const { retrieveFundraisers } = require("./retrieveFundraisers");
const { ethers } = require("ethers");

const cF = async () => {
    await createFundraiser(
        "0x0A1be59620527b6e660D54dFe1Be664258c1DbD7", // hospital address
        "My seventh Fundraiser",
        "This is my Fourth fundraiser",
        2000,
        1800000000
    );
    const ret = await retrieveFundraisers();
    return ret;
};
cF().then((r) => console.log(r));
