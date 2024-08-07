// Registered Domain names from https://support.google.com/domains/topic/6282397?hl=en&ref_topic=6279308&sjid=12005919683968299487-AP
const REGISTERED_DOMAINS = [
  ".academy",
  ".accountant",
  ".accountants",
  ".actor",
  ".agency",
  ".airforce",
  ".apartments",
  ".app",
  ".army",
  ".art",
  ".associates",
  ".attorney",
  ".au",
  ".auction",
  ".audio",
  ".autos",
  ".baby",
  ".band",
  ".bar",
  ".bargains",
  ".beauty",
  ".best",
  ".bid",
  ".bike",
  ".bingo",
  ".bio",
  ".biz",
  ".black",
  ".blog",
  ".blue",
  ".boats",
  ".bond",
  ".boo",
  ".boutique",
  ".builders",
  ".business",
  ".buzz",
  ".ca",
  ".cab",
  ".cafe",
  ".cam",
  ".camera",
  ".camp",
  ".capital",
  ".cards",
  ".care",
  ".careers",
  ".cash",
  ".casino",
  ".catering",
  ".cc",
  ".center",
  ".ceo",
  ".charity",
  ".chat",
  ".cheap",
  ".church",
  ".city",
  ".claims",
  ".cleaning",
  ".clinic",
  ".clothing",
  ".cloud",
  ".club",
  ".co",
  ".co.in",
  ".co.nz",
  ".co.uk",
  ".coach",
  ".codes",
  ".coffee",
  ".college",
  ".com",
  ".com.au",
  ".com.mx",
  ".community",
  ".company",
  ".computer",
  ".condos",
  ".construction",
  ".consulting",
  ".contact",
  ".contractors",
  ".cool",
  ".coupons",
  ".credit",
  ".creditcard",
  ".cricket",
  ".cruises",
  ".dad",
  ".dance",
  ".date",
  ".dating",
  ".day",
  ".de",
  ".deals",
  ".degree",
  ".delivery",
  ".democrat",
  ".dental",
  ".dentist",
  ".design",
  ".dev",
  ".diamonds",
  ".digital",
  ".direct",
  ".directory",
  ".discount",
  ".doctor",
  ".dog",
  ".domains",
  ".download",
  ".earth",
  ".eco",
  ".education",
  ".email",
  ".energy",
  ".engineer",
  ".engineering",
  ".enterprises",
  ".equipment",
  ".esq",
  ".estate",
  ".events",
  ".exchange",
  ".expert",
  ".exposed",
  ".express",
  ".fail",
  ".faith",
  ".family",
  ".fan",
  ".fans",
  ".farm",
  ".finance",
  ".financial",
  ".fish",
  ".fitness",
  ".flights",
  ".florist",
  ".foo",
  ".football",
  ".forsale",
  ".foundation",
  ".fr",
  ".fun",
  ".fund",
  ".furniture",
  ".futbol",
  ".fyi",
  ".gallery",
  ".games",
  ".gay",
  ".gifts",
  ".gives",
  ".glass",
  ".global",
  ".gmbh",
  ".gold",
  ".golf",
  ".graphics",
  ".gratis",
  ".green",
  ".gripe",
  ".group",
  ".guide",
  ".guru",
  ".hair",
  ".haus",
  ".health",
  ".healthcare",
  ".hockey",
  ".holdings",
  ".holiday",
  ".homes",
  ".hospital",
  ".host",
  ".house",
  ".how",
  ".icu",
  ".immo",
  ".immobilien",
  ".in",
  ".industries",
  ".info",
  ".ink",
  ".institute",
  ".insure",
  ".international",
  ".investments",
  ".io",
  ".irish",
  ".it",
  ".jetzt",
  ".jewelry",
  ".jp",
  ".kaufen",
  ".kitchen",
  ".land",
  ".lat",
  ".lawyer",
  ".lease",
  ".legal",
  ".life",
  ".lighting",
  ".limited",
  ".limo",
  ".live",
  ".llc",
  ".loan",
  ".loans",
  ".lol",
  ".love",
  ".ltd",
  ".luxury",
  ".maison",
  ".makeup",
  ".management",
  ".market",
  ".marketing",
  ".mba",
  ".me",
  ".media",
  ".memorial",
  ".men",
  ".mobi",
  ".moda",
  ".mom",
  ".money",
  ".monster",
  ".mortgage",
  ".mov",
  ".movie",
  ".mx",
  ".navy",
  ".net",
  ".network",
  ".new",
  ".news",
  ".nexus",
  ".ninja",
  ".nl",
  ".one",
  ".online",
  ".ooo",
  ".org",
  ".page",
  ".partners",
  ".parts",
  ".party",
  ".phd",
  ".photography",
  ".photos",
  ".pics",
  ".pictures",
  ".pizza",
  ".pl",
  ".place",
  ".plumbing",
  ".plus",
  ".press",
  ".pro",
  ".productions",
  ".prof",
  ".promo",
  ".properties",
  ".pub",
  ".pw",
  ".quest",
  ".racing",
  ".realty",
  ".recipes",
  ".red",
  ".rehab",
  ".reise",
  ".reisen",
  ".rent",
  ".rentals",
  ".repair",
  ".report",
  ".republican",
  ".rest",
  ".restaurant",
  ".review",
  ".reviews",
  ".rip",
  ".rocks",
  ".rsvp",
  ".run",
  ".sale",
  ".salon",
  ".sarl",
  ".school",
  ".schule",
  ".science",
  ".services",
  ".shoes",
  ".shopping",
  ".show",
  ".singles",
  ".site",
  ".ski",
  ".skin",
  ".soccer",
  ".social",
  ".software",
  ".solar",
  ".solutions",
  ".soy",
  ".space",
  ".store",
  ".stream",
  ".studio",
  ".style",
  ".supplies",
  ".supply",
  ".support",
  ".surgery",
  ".systems",
  ".tax",
  ".taxi",
  ".team",
  ".tech",
  ".technology",
  ".tennis",
  ".theater",
  ".tienda",
  ".tips",
  ".tires",
  ".today",
  ".tools",
  ".tours",
  ".town",
  ".toys",
  ".trade",
  ".training",
  ".tube",
  ".tld",
  ".uk",
  ".university",
  ".uno",
  ".us",
  ".vacations",
  ".vegas",
  ".ventures",
  ".vet",
  ".viajes",
  ".video",
  ".villas",
  ".vin",
  ".vision",
  ".vote",
  ".voyage",
  ".watch",
  ".webcam",
  ".website",
  ".wiki",
  ".win",
  ".wine",
  ".works",
  ".world",
  ".wtf",
  ".xyz",
  ".yachts",
  ".zip",
  ".zone"
]

// 
const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const emailErrorMsg = document.querySelector('#email-error');

// Render the error state
const renderError = (message) => {
  emailErrorMsg.textContent = message
  emailErrorMsg.classList.add('invalid-email')
  emailInput.classList.add('invalid')
}

// Count the valid special characters
const countValidChar = (email, validChar) => {
  let count = 0;

  for (const char of email) {
    if(char === validChar) {
      count++
    }
  }
  
  return count
}

// Validate domain part of the Email Address
const validateDomain = (domain) => {
  if(domain.length > 255) {
    // renderError('characters exceed in maximum length5')
    return false
  }

  const arrDomainName = domain.split('.')
  const leftPartDomain = arrDomainName[0]

  
  // if(leftPartDomain.length === 0 || countValidChar(domain, '.') > 1) {
  //   // renderError('Valid email required')
  //   return false
  // }
  if(leftPartDomain.length === 0) {
    // renderError('Valid email required')
    return false
  }

  // const validCharRegex = /^[A-Za-z0-9\-.]+$/;
  const validCharRegex = /^(?!.*[.-]{2})(?!.*[.-]$)(?!.*^[.-])[A-Za-z0-9]+([.-][A-Za-z0-9]+)*$/;
  

  if(!validCharRegex.test(domain)) {
    // renderError('Valid email required')
    return false
  }
  
    return true;  
}

// Validate local part/ email prefix of the Email Address
const validateLocalPart = (localPart) => {

  const validCharRegex = /^[A-Za-z0-9]+([._-][A-Za-z0-9]+)*$/;


  if (localPart.length < 2 || localPart.length > 30) {
    // renderError('Valid email required');
    return false
  }

  if(!validCharRegex.test(localPart)) {
    // renderError('Valid email required');
    return false
  }

  return true;
  
}

// Check if Email is valid
const emailIsValid = (name, value) => {
  const emailAddress = value;
  const isDNRegistered =  REGISTERED_DOMAINS.some(name => value.endsWith(name))

  if(emailAddress.includes(' ') || countValidChar(emailAddress, '@') > 1 || !isDNRegistered) {
    // renderError('Valid email required')
    return false
  }

  const splitEmail = emailAddress.split('@');
  const localPart = splitEmail[0];
  const domain = splitEmail[1];

  if(validateLocalPart(localPart) && validateDomain(domain)) {
    return true
  } else {
    return false
  }
}

// Remove error states for the form field
const clearErrors = (e) => {
  emailErrorMsg.textContent = ''
  emailErrorMsg.classList.remove('invalid-email')
  emailInput.classList.remove('invalid')
}


const handleSubmit = (e) => {
  e.preventDefault();
  
  // Get the data from the form
  const data = Object.fromEntries(new FormData(e.target))

  // Loop over the data
  Object.keys(data).forEach((name) => {
    // check if user didnt input anything in the field or if email is valid
    if(data[name].length === 0 || !emailIsValid(name,data[name])) {
      // Render an error message
      emailErrorMsg.textContent = 'Valid email required'
      emailErrorMsg.classList.add('invalid-email')
      emailInput.classList.add('invalid')
      return;
    } else {
      // send the data to the Thank you page
      emailErrorMsg.textContent = ''
      emailErrorMsg.classList.remove('invalid-email')
      emailInput.classList.remove('invalid')
      e.target.submit()
    }
  })
}


emailInput.addEventListener('input', clearErrors)
form.addEventListener('submit', handleSubmit)