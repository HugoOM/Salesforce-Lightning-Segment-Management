public without sharing class Segment_Analytics_Backend_Controller {
	
	@AuraEnabled
	public static User getCurrentUserInfo() {
		//TODO: Implement error mgmt through a try/catch block and thrwo an AuraHandledException 
		return [
			SELECT Name, Id
			FROM User
			WHERE Id = :UserInfo.getUserId()
		];
	}
}