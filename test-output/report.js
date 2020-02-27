$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/yemioluv/eclipse-workspace/com.CupCake/src/test/java/features/SignUpNow.feature");
formatter.feature({
  "line": 1,
  "name": "Sign up now",
  "description": "",
  "id": "sign-up-now",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sign up now to cup cake",
  "description": "",
  "id": "sign-up-now;sign-up-now-to-cup-cake",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigated to cup cake website https://www.alzheimers.org.uk/cupcake-day",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on sign up now",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpNowStep.i_navigated_to_cup_cake_website_https_www_alzheimers_org_uk_cupcake_day()"
});
formatter.result({
  "duration": 14257655859,
  "status": "passed"
});
formatter.match({
  "location": "SignUpNowStep.i_click_on_sign_up_now()"
});
formatter.result({
  "duration": 67756,
  "status": "passed"
});
});