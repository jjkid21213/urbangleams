const assert = (ok, msg) => {
  if (!ok) throw new Error(msg);
};

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clip(value, max) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function validateEnquiry(body) {
  const name = clip(body.name, 80);
  const email = clip(body.email, 120);
  const message = clip(body.message, 4000);
  if (name.length < 2 || !isEmail(email) || message.length < 8) return false;
  return true;
}

assert(!validateEnquiry({}), "empty rejected");
assert(!validateEnquiry({ name: "J", email: "not-an-email", message: "hi" }), "junk rejected");
assert(
  !validateEnquiry({ name: "Justin", email: "a@b.co", message: "short" }),
  "short message rejected",
);
assert(
  validateEnquiry({
    name: "Justin",
    email: "owner@cafe.example",
    message: "Need a cafe website with a menu and hours.",
  }),
  "real note accepted",
);

console.log("contact validation smoke ok");
