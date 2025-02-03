
function showStateDetails(state) {
    const statesInfo = {
        "Tamil Nadu": "Tamil Nadu\nCapital: Chennai\nCM: M. K. Stalin\nPopulation: 7.2 Crores\nLanguage: Tamil",
        "Kerala": "Kerala\nCapital: Thiruvananthapuram\nCM: Pinarayi Vijayan\nPopulation: 3.5 Crores\nLanguage: Malayalam",
        "Karnataka": "Karnataka\nCapital: Bengaluru\nCM: Siddaramaiah\nPopulation: 6.7 Crores\nLanguage: Kannada",
        "Andhra Pradesh": "Andhra Pradesh\nCapital: Amaravati\nCM: Y. S. Jagan Mohan Reddy\nPopulation: 5.3 Crores\nLanguage: Telugu",
        "Maharashtra": "Maharashtra\nCapital: Mumbai\nCM: Eknath Shinde\nPopulation: 12.5 Crores\nLanguage: Marathi",
        "Gujarat": "Gujarat\nCapital: Gandhinagar\nCM: Bhupendra Patel\nPopulation: 6.5 Crores\nLanguage: Gujarati",
        "Rajasthan": "Rajasthan\nCapital: Jaipur\nCM: Bhajan Lal Sharma\nPopulation: 8 Crores\nLanguage: Hindi",
        "Madhya Pradesh": "Madhya Pradesh\nCapital: Bhopal\nCM: Mohan Yadav\nPopulation: 8.5 Crores\nLanguage: Hindi",
        "Uttar Pradesh": "Uttar Pradesh\nCapital: Lucknow\nCM: Yogi Adityanath\nPopulation: 24 Crores\nLanguage: Hindi",
        "West Bengal": "West Bengal\nCapital: Kolkata\nCM: Mamata Banerjee\nPopulation: 10 Crores\nLanguage: Bengali",
        "Bihar": "Bihar\nCapital: Patna\nCM: Nitish Kumar\nPopulation: 12.5 Crores\nLanguage: Hindi",
        "Odisha": "Odisha\nCapital: Bhubaneswar\nCM: Naveen Patnaik\nPopulation: 4.5 Crores\nLanguage: Odia",
        "Punjab": "Punjab\nCapital: Chandigarh\nCM: Bhagwant Mann\nPopulation: 3 Crores\nLanguage: Punjabi",
        "Haryana": "Haryana\nCapital: Chandigarh\nCM: Manohar Lal Khattar\nPopulation: 2.9 Crores\nLanguage: Hindi",
        "Chhattisgarh": "Chhattisgarh\nCapital: Raipur\nCM: Vishnu Deo Sai\nPopulation: 3 Crores\nLanguage: Hindi",
        "Jharkhand": "Jharkhand\nCapital: Ranchi\nCM: Hemant Soren\nPopulation: 3.3 Crores\nLanguage: Hindi",
        "Assam": "Assam\nCapital: Dispur\nCM: Himanta Biswa Sarma\nPopulation: 3.5 Crores\nLanguage: Assamese",
        "Himachal Pradesh": "Himachal Pradesh\nCapital: Shimla\nCM: Sukhvinder Singh Sukhu\nPopulation: 70 Lakhs\nLanguage: Hindi",
        "Uttarakhand": "Uttarakhand\nCapital: Dehradun\nCM: Pushkar Singh Dhami\nPopulation: 1.2 Crores\nLanguage: Hindi",
        "Goa": "Goa\nCapital: Panaji\nCM: Pramod Sawant\nPopulation: 16 Lakhs\nLanguage: Konkani",
        "Sikkim": "Sikkim\nCapital: Gangtok\nCM: Prem Singh Tamang\nPopulation: 7 Lakhs\nLanguage: Nepali",
        "Tripura": "Tripura\nCapital: Agartala\nCM: Manik Saha\nPopulation: 40 Lakhs\nLanguage: Bengali",
        "Meghalaya": "Meghalaya\nCapital: Shillong\nCM: Conrad Sangma\nPopulation: 30 Lakhs\nLanguage: Khasi, Garo",
        "Manipur": "Manipur\nCapital: Imphal\nCM: N. Biren Singh\nPopulation: 30 Lakhs\nLanguage: Meitei",
        "Nagaland": "Nagaland\nCapital: Kohima\nCM: Neiphiu Rio\nPopulation: 20 Lakhs\nLanguage: English",
        "Arunachal Pradesh": "Arunachal Pradesh\nCapital: Itanagar\nCM: Pema Khandu\nPopulation: 15 Lakhs\nLanguage: English",
        "Mizoram": "Mizoram\nCapital: Aizawl\nCM: Zoramthanga\nPopulation: 12 Lakhs\nLanguage: Mizo"
    };
    alert(statesInfo[state] || "Information not available");
}
