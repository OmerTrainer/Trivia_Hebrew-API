export const eventsForStats = {
  1: {
    5: 100, //מענק
    8: 100, //מיני רעם
    3: 100, //בוחן צוות
  },
  2: {
    6: 100, //מענק
    7: 100, //מיני רעם
    4: 100, //בוחן צוות
  },
  3: {
    12: 30, //נהג - תרחיש בסיסי
    10: 70, //נהג - תרחיש מתקדם
    3: 100, //בוחן צוות
  },
  4: {
    88: 40, //מטז יום
    89: 60, //מטז לילה
    20: 30,//תותחן - תרחיש בסיסי
    21: 40, //תותחן - תרחיש מתקדם
    22: 30,// תרחיש רק"מ
    3: 100, //בוחן צוות
  },
  5: {
    18: 60, //בוחן טען
    17: 20, //תרחיש נהיגה
    19: 20, //אתת קשר
    3: 100, //בוחן צוות
  },
};

export const noneEvents = [88,89];
export const crewTest = 3;

export const eventsMap = {
  roles: [
    {
      role: "מפקדים",
      role_id: 2,
      columns: [
        {
          paramater_id: 1,
          worth: 10,
          ids: {
            6: 100,
          },
        },
        {
          paramater_id: 2,
          worth: 50,
          ids: {
            7: 100,
          },
        },
        {
          paramater_id: 3,
          worth: 40,
          ids: {
            4: 100,
          },
        },
      ],
    },
    {
      role: "נהגים",
      role_id: 3,
      columns: [
        {
          paramater_id: 1,
          worth: 80,
          ids: {
            10: 70,
            12: 30,
          },
        },
        {
          paramater_id: 2,
          worth: 0,
          ids: {},
        },
        {
          paramater_id: 3,
          worth: 20,
          ids: {
            3: 100,
          },
        },
      ],
    },
    {
      role: "תותחנים",
      role_id: 4,
      columns: [
        {
          paramater_id: 1,
          worth: 30,
          ids: {
            88: 40,
            89: 60,
          },
        },
        {
          paramater_id: 2,
          worth: 50,
          ids: {
            20: 30,
            21: 40,
            22: 30,
          },
        },
        {
          paramater_id: 3,
          worth: 20,
          ids: {
            3: 100,
          },
        },
      ],
    },
    {
      role: "טענים",
      role_id: 5,
      columns: [
        {
          paramater_id: 1,
          worth: 80,
          ids: {
            17: 20,
            18: 60,
            19: 20,
          },
        },
        {
          paramater_id: 2,
          worth: 0,
          ids: {},
        },
        {
          paramater_id: 3,
          worth: 20,
          ids: {
            3: 100,
          },
        },
      ],
    },
  ],
  parameters: {
    1: "מערכות ומכלולים",
    2: "השמדת אויב",
    3: "השתלבות בלחימת הצוות",
  },
}
