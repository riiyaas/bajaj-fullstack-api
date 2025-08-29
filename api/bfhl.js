module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ is_success: false, message: "Method Not Allowed" });
  }

  try {
    const data = req.body.data;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const FULL_NAME = "riya_singh";
    const DOB = "23012004";
    const EMAIL = "riyasingh.fas@gmail.com";
    const ROLL_NUMBER = "22BBS0130";

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach(item => {
      if (!isNaN(item)) {
        let num = parseInt(item);
        if (num % 2 === 0) even_numbers.push(item);
        else odd_numbers.push(item);
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    let concat_string = "";
    let allChars = alphabets.join("").split("").reverse();
    allChars.forEach((ch, idx) => {
      concat_string += idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
    });

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });
  } catch (err) {
    res.status(500).json({ is_success: false, message: err.message });
  }
};
