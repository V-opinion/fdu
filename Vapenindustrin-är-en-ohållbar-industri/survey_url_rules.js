/**
 * @fileOverview
 *
 * This JSONP specifies which surveys should be loaded depending on the current URL.
 *
 * The JSONP structure is the following:
 *
 * *   pop_up_settings_file
 * >   URL to the popup settings file, described in *data/custom_invitation_settings.js*
 *
 *     *   white_list
 *     >   Array of regular expressions as strings
 *
 *     *   black_list
 *     >   Array of regular expressions as strings
 *
 *
 * The expressions in the black list are stronger than the expressions in the white list.
 *
 */

SurveyInvitation.load_survey_url_rules_callback({
    "surveys": [
/*        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/audience_survey/ec_audiovisual_service/01/invitation_settings.js": {
                "white_list": [
                    "https?://audiovisual\.ec\.europa\.eu/"
//                    "https?://acceptance\.audiovisual\.ec\.europa\.eu/.*"
                ],
                "black_list": []
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/audience_survey/ec_press_corner/01/invitation_settings.js": {
                "white_list": [
                    "https?://ec\.europa\.eu/commission/presscorner/.*"
//                    "https?://webgate\.acceptance\.ec\.europa\.eu/commission/presscorner/.*"
                ],
                "black_list": []
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/audience_survey/ec_representation/01/invitation_settings.js": {
                "white_list": [
                    "https?://.*\.representation\.ec\.europa\.eu/.*"
//                    "https?://comm-ewpp-ext-learning-corner\.acc\.fpfis\.tech\.ec\.europa\.eu/play-games.*"
                ],
                "black_list": []
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/audience_survey/eu_learning_corner/01/invitation_settings.js": {
                "white_list": [
                    "https?://learning-corner\.learning\.europa\.eu/.*"                    
//                    "https?://comm-ewpp-ext-learning-corner\.acc\.fpfis\.tech\.ec\.europa\.eu/.*"
                ],
                "black_list": []
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/audience_survey/eurobarometer_public_opinion/01/invitation_settings.js": {
                "white_list": [
                    "https?://europa\.eu/eurobarometer/.*"
//                    "https?://www\.test\.europa\.eu/eurobarometer/.*"
                ],
                "black_list": []
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/audience_survey/european_commission/01/invitation_settings.js": {
                "white_list": [
                    "https?://commission\.europa\.eu/.*"
//                    "https?://comm-ewcms-commission\.acc\.fpfis\.tech\.ec\.europa\.eu/.*"
                ],
                "black_list": []
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/audience_survey/european_union/01/invitation_settings.js": {
                "white_list": [
                    "https?://european-union\.europa\.eu/.*"
//                    "https?://comm-ewcms-europaeu\.acc\.fpfis\.tech\.ec\.europa\.eu/.*"
                ],
                "black_list": []
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/audience_survey/nextgenerationeu/01/invitation_settings.js": {
                "white_list": [
                    "https?://next-generation-eu\.europa\.eu/.*"
//                    "https?://comm-ewcms-next-generation-eu\.acc\.fpfis\.tech\.ec\.europa\.eu/.*"
                ],
                "black_list": []
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/audience_survey/you_are_eu/01/invitation_settings.js": {
                "white_list": [
                    "https?://you-are-eu\.europa\.eu/.*"
//                    "https?://comm-ewcms-campaign5\.acc\.fpfis\.tech\.ec\.europa\.eu/.*"
                ],
                "black_list": []
            }
        },*/
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/ec_online_survey/01/invitation_settings.js": {
                "white_list": [
                    "https?://ec\.europa\.eu/info/.*",
                    "https?://ec\.europa\.eu/commission/.*",
                    "https?://acceptance\.audiovisual\.ec\.europa\.eu/.*",
                    "https?://commission\.europa\.eu/.*",
                    "https?://comm-ewcms-commission\.acc\.fpfis\.tech\.ec\.europa\.eu/strategy-and-policy_en",
                    "https?://www\.test\.europa\.eu/eurobarometer/.*",
                    "https?://webgate\.acceptance\.ec\.europa\.eu/commission/presscorner/.*",
                    "https?://comm-ewpp-ext-learning-corner\.acc\.fpfis\.tech\.ec\.europa\.eu/.*"
                ],
                "black_list": [

                ]
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/eu_online_survey/01/invitation_settings.js": {
                "white_list": [
                    "https?://europa\.eu/european-union/.*",
                    "https?://european\-union\.europa\.eu/.*",
                    "https?://webgate\.acceptance\.ec\.europa\.eu/ewcms/uat/.*"
                ],
                "black_list": [

                ]
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/uat-eu/01/invitation_settings.js": {
                "white_list": [
                    "https://comm-ewcms-uat-eu\.acc\.fpfis\.tech\.ec\.europa\.eu/.*"
                ],
                "black_list": [

                ]
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/europeday/01/invitation_settings.js": {
                "white_list": [
                    "https://europeday\.europa\.eu/.*"
                ],
                "black_list": [

                ]
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/economy-finance/01/invitation_settings.js": {
                "white_list": [
                    "https://economy-finance\.ec\.europa\.eu/economic-forecast-and-surveys/economic-forecasts/spring-2023-economic-forecast-improved-outlook-amid-persistent-challenges_en"
                ],
                "black_list": [

                ]
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/kohesio/01/invitation_settings.js": {
                "white_list": [
                    "https://kohesio\.ec\.europa\.eu.*",
					"https://kohesio\.test\.ec\.europa\.eu.*"
                ],
                "black_list": [

                ]
            }
        },
        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/cem/mode_1/invitation_settings.js": {
                "white_list": [
                    "https://ec\.europa\.eu/test_cem/rombpat/surveys/popup1\.html"
                ],
                "black_list": [

                ]
            }
        },
		{
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/eur-lex/invitation_settings.js": {
                "white_list": [
                    "https://wip\.eur-lex\.production\.op\.aws\.cloud\.tech\.ec\.europa\.eu.*",
					"https://eur-lex\.eurodyn\.com.*",
					"https://eur-lex\.reception\.op\.aws\.cloud\.tech\.ec\.europa\.eu/.*",
                    "https://wip\.eur-lex\.reception\.op\.aws\.cloud\.tech\.ec\.europa\.eu/.*",
                    "https://ec\.europa\.eu/test_cem/rombpat/surveys/eur-lex/.*",
					 "https://eur-lex\.europa\.eu/.*"
                ],
                "black_list": [

                ]
            }
        },
		{
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/health/invitation_settings.js": {
                "white_list": [
                    "https://health\.ec\.europa\.eu.*"
                ],
                "black_list": [

                ]
            }
        },

      		{
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/agriculture/invitation_settings.js": {
                "white_list": [
                    "https://agriculture\.ec\.europa\.eu.*"
                ],
                "black_list": [

                ]
            }
        },

        {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/cem/mode_2/invitation_settings.js": {
                "white_list": [
                   "https://ec\.europa\.eu/test_cem/rombpat/surveys/popup2\.html",
					"https://comm-ewcms-uat-ec\.fpfis\.tech\.ec\.europa\.eu/support/.*",
                   "https://ec\.europa\.eu/test_cem/test_neha/Surveys/popup_nonEWPP\.html",
                   "https://ec\.europa\.eu/test_cem/test_neha/Surveys/popup_EWPP\.html" 
                ],
                "black_list": [

                ]
            }
        }, 

         {
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/eacea/invitation_settings.js": {
                "white_list": [
                    "https://www\.eacea\.ec\.europa\.eu.*"
                ],
                "black_list": [

                ]
            }
        

	},

      		{
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/taxation_and_customs_union/invitation_settings.js": {
                "white_list": [
                    "https://taxation-customs\.ec\.europa\.eu.*"
                ],
                "black_list": [
 
                ]
            }
        },
		
		{
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/home/invitation_settings.js": {
				
                "white_list": [
                    "https://home-affairs\.ec\.europa\.eu.*"
                ],
                "black_list": [

                ]
            }
		
		},	
		
		{
            "https://ec.europa.eu/wel/surveys/wr_survey03/data/invitation_settings/eu_for_children/invitation_settings.js": {
				
                "white_list": [
                    "https://eu-for-children\.europa\.eu/childrens-voices",
                    "https://eu-for-children\.europa\.eu/participate",
                    "https://eu-for-children\.europa\.eu/democracy-voting-survey",
                    "https://eu-for-children\.europa\.eu/feeling-safe",
                    "https://eu-for-children\.europa\.eu/together-online",
                    "https://eu-for-children\.europa\.eu/co-creation-team",
                    "https://eu-for-children\.europa\.eu/activities-news",
                    "https://eu-for-children\.europa\.eu/activities-news/photos-videos-2023",
                    "https://eu-for-children\.europa\.eu/about/members"
                ],
                "black_list": [

                ]
            }
		
		}	
		
			
    ]
});