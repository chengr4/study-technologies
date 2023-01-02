import { createMongoAbility } from '@casl/ability';

const ability = createMongoAbility([
  {
    "action": [
      "create",
      "read",
      "update",
      "delete"
    ],
    "subject": "Organization"
  },
  {
    "action": [
      "create",
      "read",
      "delete"
    ],
    "subject": "User"
  },
  {
    "action": "read",
    "subject": "User",
    "conditions": {
      "id": 46
    }
  },
  {
    "action": "update",
    "subject": "User",
    "conditions": {
      "id": 46
    },
    "fields": [
      "first_name",
      "middle_name",
      "last_name",
      "phone_number",
      "npi",
      "address_street",
      "address_apt",
      "address_city",
      "address_state",
      "address_zipcode"
    ]
  }
]);

console.log(
  ability.can('update', 'User')
); 


