
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

const firebaseAdmin = require("firebase-admin");

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.applicationDefault(),
  databaseURL: 'ws://',
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to College of Education Portal!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  // ABOUT
  function about(agent) {
    return firebaseAdmin.database().ref('about').once('value').then((snapshot) => {
      const value = snapshot.child('welcome').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }
 
  function about_accreditation(agent) {
    return firebaseAdmin.database().ref('about').once('value').then((snapshot) => {
      const value = snapshot.child('accreditation').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function about_all_degree_programs(agent) {
    return firebaseAdmin.database().ref('about').once('value').then((snapshot) => {
      const value = snapshot.child('all_degree_programs').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function about_blog(agent) {
    return firebaseAdmin.database().ref('about').once('value').then((snapshot) => {
      const value = snapshot.child('blog').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function about_contact_us(agent) {
    return firebaseAdmin.database().ref('about').once('value').then((snapshot) => {
      const value = snapshot.child('contact_us').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }


  // UNDERGRADUATE PROGRAMS
  function undergraduate_majors(agent) {
    return firebaseAdmin.database().ref('undergraduate_programs').once('value').then((snapshot) => {
      const value = snapshot.child('undergraduate_majors').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function undergraduate_programs_minors(agent) {
    return firebaseAdmin.database().ref('undergraduate_programs').once('value').then((snapshot) => {
      const value = snapshot.child('minors').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function undergraduate_programs_academic_advising(agent) {
    return firebaseAdmin.database().ref('undergraduate_programs').once('value').then((snapshot) => {
      const value = snapshot.child('academic_advising').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function undergraduate_programs_campusfolio(agent) {
    return firebaseAdmin.database().ref('undergraduate_programs').once('value').then((snapshot) => {
      const value = snapshot.child('campusfolio').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  // GRADUATE STUDIES
  function graduate_degree_programs(agent) {
    return firebaseAdmin.database().ref('graduate_studies').once('value').then((snapshot) => {
      const value = snapshot.child('graduate_degree_programs').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }
  
  function graduate_studies_online_programs(agent) {
    return firebaseAdmin.database().ref('graduate_studies').once('value').then((snapshot) => {
      const value = snapshot.child('online_programs').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function graduate_studies_graduate_certificates(agent) {
    return firebaseAdmin.database().ref('graduate_studies').once('value').then((snapshot) => {
      const value = snapshot.child('graduate_certificates').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  // FACULTY AND STAFF
  function faculty_and_staff(agent) {
    return firebaseAdmin.database().ref('faculty_and_staff').once('value').then((snapshot) => {
      const value = snapshot.child('overview').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function faculty_and_staff_areas_of_expertise(agent) {
    return firebaseAdmin.database().ref('faculty_and_staff').once('value').then((snapshot) => {
      const value = snapshot.child('areas_of_expertise').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  // RESEARCH
  function research(agent) {
    return firebaseAdmin.database().ref('research').once('value').then((snapshot) => {
      const value = snapshot.child('overview').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function research_centers_and_institutes(agent) {
    return firebaseAdmin.database().ref('research').once('value').then((snapshot) => {
      const value = snapshot.child('centers_and_institutes').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  // ALUMNI AND GIVING
  function alumni_and_giving_stay_involved(agent) {
    return firebaseAdmin.database().ref('alumni_and_giving').once('value').then((snapshot) => {
      const value = snapshot.child('stay_involved!').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  function alumni_and_giving_alumni_association(agent) {
    return firebaseAdmin.database().ref('alumni_and_giving').once('value').then((snapshot) => {
      const value = snapshot.child('alumni_association').val();
      if (value !== null) {
       agent.add(`DATA FETCHED FROM FIREBASE: ${value}`); 	
      }
    });
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);

  // ABOUT
  intentMap.set('welcome', about);
  intentMap.set('about_accreditation', about_accreditation);
  intentMap.set('about_all_degree_programs', about_all_degree_programs);
  intentMap.set('about_blog', about_blog);
  intentMap.set('about_contact_us', about_contact_us);

  // UNDERGRADUATE PROGRAMS
  intentMap.set('undergraduate_majors', undergraduate_majors);
  intentMap.set('undergraduate_programs_minors', undergraduate_programs_minors);
  intentMap.set('undergraduate_programs_academic_advising', undergraduate_programs_academic_advising);
  intentMap.set('undergraduate_programs_campusfolio', undergraduate_programs_campusfolio);

  // GRADUATE STUDIES
  intentMap.set('graduate_degree_programs', graduate_degree_programs);
  intentMap.set('online_programs', graduate_studies_online_programs);
  intentMap.set('graduate_certificates', graduate_studies_graduate_certificates);

  // FACULTY AND STAFF
  intentMap.set('faculty_and_staff', faculty_and_staff);
  intentMap.set('faculty_and_staff_areas_of_expertise', faculty_and_staff_areas_of_expertise);

  // RESEARCH
  intentMap.set('research', research);
  intentMap.set('research_centers_and_institutes', research_centers_and_institutes);

  // ALUMNI AND GIVING
  intentMap.set('alumni_and_giving_stay_involved', alumni_and_giving_stay_involved);
  intentMap.set('alumni_and_giving_alumni_association', alumni_and_giving_alumni_association);

  agent.handleRequest(intentMap);
});
