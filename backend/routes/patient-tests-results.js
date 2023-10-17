// const auth = require("../middleware/auth");
// const _ = require("lodash");

router.get("", async (req, res) => {
});

router.post("", async (req, res) => {
    // Submitting Test Results.
    // Request Data.
    const requestData = {
        patient_test_uuid: 'adadasda', 
        test_results: [
            {
                test_id: 1,
                result_value
            },
            {
                test_id: 1,
                result_value
            },
            {
                test_id: 1,
                result_value
            },
            {
                test_id: 1,
                result_value
            },
        ]
    }
    // Update Test Status from pending to completed.
});

router.put("", async (req, res) => {
})

module.exports = router;
