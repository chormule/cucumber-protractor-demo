Feature: E2E test using Cucumber and Protractor
	I want to test my AngularJS app using cucumber and protractor

	
Scenario: Successful addition of two numbers
    Given I am on Home Page of my application
	When I provides first input as "20"
	And  I provides second input as "20"
	And  I clicks on the "Get the result" button
	Then I am able to see result as "30"