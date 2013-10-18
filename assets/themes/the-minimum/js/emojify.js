/*! emojify.js - v0.8.0 - 
 * Copyright (c) Hassan Khan 2013
 */!function(a){var b=function(){var b=a.window.document,c=[[/:-*\)/g,"emojify blush"],[/:-*o/gi,"emojify scream"],[/(:|;)-*]/g,"emojify smirk"],[/(:|;)-*d/gi,"emojify smiley"],[/xd/gi,"emojify stuck_out_tongue_closed_eyes"],[/:-*p/gi,"emojify stuck_out_tongue_winking_eye"],[/:-*(\[|@)/g,"emojify rage"],[/:-*\(/g,"emojify disappointed"],[/:('|’)-*\(/g,"emojify sob"],[/:-*\*/g,"emojify kissing_heart"],[/;-*\)/g,"emojify wink"],[/:-*\//g,"emojify pensive"],[/:-*s/gi,"emojify confounded"],[/:-*\|/g,"emojify flushed"],[/:-*\$/g,"emojify relaxed"],[/:-*x/gi,"emojify mask"],[/<3/g,"emojify heart"],[/<\/3/g,"emojify broken_heart"]],d=[[/:bowtie:/g,"emojify bowtie"],[/:smile:/g,"emojify smile"],[/:laughing:/g,"emojify laughing"],[/:blush:/g,"emojify blush"],[/:smiley:/g,"emojify smiley"],[/:relaxed:/g,"emojify relaxed"],[/:smirk:/g,"emojify smirk"],[/:heart_eyes:/g,"emojify heart_eyes"],[/:kissing_heart:/g,"emojify kissing_heart"],[/:kissing_closed_eyes:/g,"emojify kissing_closed_eyes"],[/:flushed:/g,"emojify flushed"],[/:relieved:/g,"emojify relieved"],[/:satisfied:/g,"emojify satisfied"],[/:grin:/g,"emojify grin"],[/:wink:/g,"emojify wink"],[/:wink2:/g,"emojify wink2"],[/:stuck_out_tongue_winking_eye:/g,"emojify stuck_out_tongue_winking_eye"],[/:stuck_out_tongue_closed_eyes:/g,"emojify stuck_out_tongue_closed_eyes"],[/:grinning:/g,"emojify grinning"],[/:kissing:/g,"emojify kissing"],[/:kissing_smiling_eyes:/g,"emojify kissing_smiling_eyes"],[/:stuck_out_tongue:/g,"emojify stuck_out_tongue"],[/:sleeping:/g,"emojify sleeping"],[/:worried:/g,"emojify worried"],[/:frowning:/g,"emojify frowning"],[/:anguished:/g,"emojify anguished"],[/:open_mouth:/g,"emojify open_mouth"],[/:grimacing:/g,"emojify grimacing"],[/:confused:/g,"emojify confused"],[/:hushed:/g,"emojify hushed"],[/:expressionless:/g,"emojify expressionless"],[/:unamused:/g,"emojify unamused"],[/:sweat_smile:/g,"emojify sweat_smile"],[/:sweat:/g,"emojify sweat"],[/:weary:/g,"emojify weary"],[/:pensive:/g,"emojify pensive"],[/:disappointed:/g,"emojify disappointed"],[/:confounded:/g,"emojify confounded"],[/:fearful:/g,"emojify fearful"],[/:cold_sweat:/g,"emojify cold_sweat"],[/:persevere:/g,"emojify persevere"],[/:cry:/g,"emojify cry"],[/:sob:/g,"emojify sob"],[/:joy:/g,"emojify joy"],[/:scream:/g,"emojify scream"],[/:astonished:/g,"emojify astonished"],[/:neckbeard:/g,"emojify neckbeard"],[/:tired_face:/g,"emojify tired_face"],[/:angry:/g,"emojify angry"],[/:rage:/g,"emojify rage"],[/:triumph:/g,"emojify triumph"],[/:sleepy:/g,"emojify sleepy"],[/:yum:/g,"emojify yum"],[/:mask:/g,"emojify mask"],[/:sunglasses:/g,"emojify sunglasses"],[/:dizzy_face:/g,"emojify dizzy_face"],[/:imp:/g,"emojify imp"],[/:smiling_imp:/g,"emojify smiling_imp"],[/:neutral_face:/g,"emojify neutral_face"],[/:no_mouth:/g,"emojify no_mouth"],[/:innocent:/g,"emojify innocent"],[/:alien:/g,"emojify alien"],[/:yellow_heart:/g,"emojify yellow_heart"],[/:blue_heart:/g,"emojify blue_heart"],[/:purple_heart:/g,"emojify purple_heart"],[/:heart:/g,"emojify heart"],[/:green_heart:/g,"emojify green_heart"],[/:broken_heart:/g,"emojify broken_heart"],[/:heartbeat:/g,"emojify heartbeat"],[/:heartpulse:/g,"emojify heartpulse"],[/:two_hearts:/g,"emojify two_hearts"],[/:revolving_hearts:/g,"emojify revolving_hearts"],[/:cupid:/g,"emojify cupid"],[/:sparkling_heart:/g,"emojify sparkling_heart"],[/:sparkles:/g,"emojify sparkles"],[/:star:/g,"emojify star"],[/:star2:/g,"emojify star2"],[/:dizzy:/g,"emojify dizzy"],[/:boom:/g,"emojify boom"],[/:collision:/g,"emojify collision"],[/:anger:/g,"emojify anger"],[/:exclamation:/g,"emojify exclamation"],[/:question:/g,"emojify question"],[/:grey_exclamation:/g,"emojify grey_exclamation"],[/:grey_question:/g,"emojify grey_question"],[/:zzz:/g,"emojify zzz"],[/:dash:/g,"emojify dash"],[/:sweat_drops:/g,"emojify sweat_drops"],[/:notes:/g,"emojify notes"],[/:musical_note:/g,"emojify musical_note"],[/:fire:/g,"emojify fire"],[/:hankey:/g,"emojify hankey"],[/:poop:/g,"emojify poop"],[/:shit:/g,"emojify shit"],[/:thumbsup:|:\+1:/g,"emojify thumbsup"],[/:thumbsdown:|:-1:/g,"emojify thumbsdown"],[/:ok_hand:/g,"emojify ok_hand"],[/:punch:/g,"emojify punch"],[/:facepunch:/g,"emojify facepunch"],[/:fist:/g,"emojify fist"],[/:v:/g,"emojify v"],[/:wave:/g,"emojify wave"],[/:hand:/g,"emojify hand"],[/:open_hands:/g,"emojify open_hands"],[/:point_up:/g,"emojify point_up"],[/:point_down:/g,"emojify point_down"],[/:point_left:/g,"emojify point_left"],[/:point_right:/g,"emojify point_right"],[/:raised_hands:/g,"emojify raised_hands"],[/:pray:/g,"emojify pray"],[/:point_up_2:/g,"emojify point_up_2"],[/:clap:/g,"emojify clap"],[/:muscle:/g,"emojify muscle"],[/:metal:/g,"emojify metal"],[/:walking:/g,"emojify walking"],[/:runner:/g,"emojify runner"],[/:running:/g,"emojify running"],[/:couple:/g,"emojify couple"],[/:family:/g,"emojify family"],[/:two_men_holding_hands:/g,"emojify two_men_holding_hands"],[/:two_women_holding_hands:/g,"emojify two_women_holding_hands"],[/:dancer:/g,"emojify dancer"],[/:dancers:/g,"emojify dancers"],[/:ok_woman:/g,"emojify ok_woman"],[/:no_good:/g,"emojify no_good"],[/:information_desk_person:/g,"emojify information_desk_person"],[/:raised_hand:/g,"emojify raised_hand"],[/:bride_with_veil:/g,"emojify bride_with_veil"],[/:person_with_pouting_face:/g,"emojify person_with_pouting_face"],[/:person_frowning:/g,"emojify person_frowning"],[/:bow:/g,"emojify bow"],[/:couplekiss:/g,"emojify couplekiss"],[/:couple_with_heart:/g,"emojify couple_with_heart"],[/:massage:/g,"emojify massage"],[/:haircut:/g,"emojify haircut"],[/:nail_care:/g,"emojify nail_care"],[/:boy:/g,"emojify boy"],[/:girl:/g,"emojify girl"],[/:woman:/g,"emojify woman"],[/:man:/g,"emojify man"],[/:baby:/g,"emojify baby"],[/:older_woman:/g,"emojify older_woman"],[/:older_man:/g,"emojify older_man"],[/:person_with_blond_hair:/g,"emojify person_with_blond_hair"],[/:man_with_gua_pi_mao:/g,"emojify man_with_gua_pi_mao"],[/:man_with_turban:/g,"emojify man_with_turban"],[/:construction_worker:/g,"emojify construction_worker"],[/:cop:/g,"emojify cop"],[/:angel:/g,"emojify angel"],[/:princess:/g,"emojify princess"],[/:smiley_cat:/g,"emojify smiley_cat"],[/:smile_cat:/g,"emojify smile_cat"],[/:heart_eyes_cat:/g,"emojify heart_eyes_cat"],[/:kissing_cat:/g,"emojify kissing_cat"],[/:smirk_cat:/g,"emojify smirk_cat"],[/:scream_cat:/g,"emojify scream_cat"],[/:crying_cat_face:/g,"emojify crying_cat_face"],[/:joy_cat:/g,"emojify joy_cat"],[/:pouting_cat:/g,"emojify pouting_cat"],[/:japanese_ogre:/g,"emojify japanese_ogre"],[/:japanese_goblin:/g,"emojify japanese_goblin"],[/:see_no_evil:/g,"emojify see_no_evil"],[/:hear_no_evil:/g,"emojify hear_no_evil"],[/:speak_no_evil:/g,"emojify speak_no_evil"],[/:guardsman:/g,"emojify guardsman"],[/:skull:/g,"emojify skull"],[/:feet:/g,"emojify feet"],[/:lips:/g,"emojify lips"],[/:kiss:/g,"emojify kiss"],[/:droplet:/g,"emojify droplet"],[/:ear:/g,"emojify ear"],[/:eyes:/g,"emojify eyes"],[/:nose:/g,"emojify nose"],[/:tongue:/g,"emojify tongue"],[/:love_letter:/g,"emojify love_letter"],[/:bust_in_silhouette:/g,"emojify bust_in_silhouette"],[/:busts_in_silhouette:/g,"emojify busts_in_silhouette"],[/:speech_balloon:/g,"emojify speech_balloon"],[/:thought_balloon:/g,"emojify thought_balloon"],[/:feelsgood:/g,"emojify feelsgood"],[/:finnadie:/g,"emojify finnadie"],[/:goberserk:/g,"emojify goberserk"],[/:godmode:/g,"emojify godmode"],[/:hurtrealbad:/g,"emojify hurtrealbad"],[/:rage1:/g,"emojify rage1"],[/:rage2:/g,"emojify rage2"],[/:rage3:/g,"emojify rage3"],[/:rage4:/g,"emojify rage4"],[/:suspect:/g,"emojify suspect"],[/:trollface:/g,"emojify trollface"]],e=[[/:sunny:/g,"emojify sunny"],[/:umbrella:/g,"emojify umbrella"],[/:cloud:/g,"emojify cloud"],[/:snowflake:/g,"emojify snowflake"],[/:snowman:/g,"emojify snowman"],[/:zap:/g,"emojify zap"],[/:cyclone:/g,"emojify cyclone"],[/:foggy:/g,"emojify foggy"],[/:ocean:/g,"emojify ocean"],[/:cat:/g,"emojify cat"],[/:dog:/g,"emojify dog"],[/:mouse:/g,"emojify mouse"],[/:hamster:/g,"emojify hamster"],[/:rabbit:/g,"emojify rabbit"],[/:wolf:/g,"emojify wolf"],[/:frog:/g,"emojify frog"],[/:tiger:/g,"emojify tiger"],[/:koala:/g,"emojify koala"],[/:bear:/g,"emojify bear"],[/:pig:/g,"emojify pig"],[/:pig_nose:/g,"emojify pig_nose"],[/:cow:/g,"emojify cow"],[/:boar:/g,"emojify boar"],[/:monkey_face:/g,"emojify monkey_face"],[/:monkey:/g,"emojify monkey"],[/:horse:/g,"emojify horse"],[/:racehorse:/g,"emojify racehorse"],[/:camel:/g,"emojify camel"],[/:sheep:/g,"emojify sheep"],[/:elephant:/g,"emojify elephant"],[/:panda_face:/g,"emojify panda_face"],[/:snake:/g,"emojify snake"],[/:bird:/g,"emojify bird"],[/:baby_chick:/g,"emojify baby_chick"],[/:hatched_chick:/g,"emojify hatched_chick"],[/:hatching_chick:/g,"emojify hatching_chick"],[/:chicken:/g,"emojify chicken"],[/:penguin:/g,"emojify penguin"],[/:turtle:/g,"emojify turtle"],[/:bug:/g,"emojify bug"],[/:honeybee:/g,"emojify honeybee"],[/:ant:/g,"emojify ant"],[/:beetle:/g,"emojify beetle"],[/:snail:/g,"emojify snail"],[/:octopus:/g,"emojify octopus"],[/:tropical_fish:/g,"emojify tropical_fish"],[/:fish:/g,"emojify fish"],[/:whale:/g,"emojify whale"],[/:whale2:/g,"emojify whale2"],[/:dolphin:/g,"emojify dolphin"],[/:cow2:/g,"emojify cow2"],[/:ram:/g,"emojify ram"],[/:rat:/g,"emojify rat"],[/:water_buffalo:/g,"emojify water_buffalo"],[/:tiger2:/g,"emojify tiger2"],[/:rabbit2:/g,"emojify rabbit2"],[/:dragon:/g,"emojify dragon"],[/:goat:/g,"emojify goat"],[/:rooster:/g,"emojify rooster"],[/:dog2:/g,"emojify dog2"],[/:pig2:/g,"emojify pig2"],[/:mouse2:/g,"emojify mouse2"],[/:ox:/g,"emojify ox"],[/:dragon_face:/g,"emojify dragon_face"],[/:blowfish:/g,"emojify blowfish"],[/:crocodile:/g,"emojify crocodile"],[/:dromedary_camel:/g,"emojify dromedary_camel"],[/:leopard:/g,"emojify leopard"],[/:cat2:/g,"emojify cat2"],[/:poodle:/g,"emojify poodle"],[/:paw_prints:/g,"emojify paw_prints"],[/:bouquet:/g,"emojify bouquet"],[/:cherry_blossom:/g,"emojify cherry_blossom"],[/:tulip:/g,"emojify tulip"],[/:four_leaf_clover:/g,"emojify four_leaf_clover"],[/:rose:/g,"emojify rose"],[/:sunflower:/g,"emojify sunflower"],[/:hibiscus:/g,"emojify hibiscus"],[/:maple_leaf:/g,"emojify maple_leaf"],[/:leaves:/g,"emojify leaves"],[/:fallen_leaf:/g,"emojify fallen_leaf"],[/:herb:/g,"emojify herb"],[/:mushroom:/g,"emojify mushroom"],[/:cactus:/g,"emojify cactus"],[/:palm_tree:/g,"emojify palm_tree"],[/:evergreen_tree:/g,"emojify evergreen_tree"],[/:deciduous_tree:/g,"emojify deciduous_tree"],[/:chestnut:/g,"emojify chestnut"],[/:seedling:/g,"emojify seedling"],[/:blossom:/g,"emojify blossom"],[/:ear_of_rice:/g,"emojify ear_of_rice"],[/:shell:/g,"emojify shell"],[/:globe_with_meridians:/g,"emojify globe_with_meridians"],[/:sun_with_face:/g,"emojify sun_with_face"],[/:full_moon_with_face:/g,"emojify full_moon_with_face"],[/:new_moon_with_face:/g,"emojify new_moon_with_face"],[/:new_moon:/g,"emojify new_moon"],[/:waxing_crescent_moon:/g,"emojify waxing_crescent_moon"],[/:first_quarter_moon:/g,"emojify first_quarter_moon"],[/:waxing_gibbous_moon:/g,"emojify waxing_gibbous_moon"],[/:full_moon:/g,"emojify full_moon"],[/:waning_gibbous_moon:/g,"emojify waning_gibbous_moon"],[/:last_quarter_moon:/g,"emojify last_quarter_moon"],[/:waning_crescent_moon:/g,"emojify waning_crescent_moon"],[/:last_quarter_moon_with_face:/g,"emojify last_quarter_moon_with_face"],[/:first_quarter_moon_with_face:/g,"emojify first_quarter_moon_with_face"],[/:moon:/g,"emojify moon"],[/:earth_africa:/g,"emojify earth_africa"],[/:earth_americas:/g,"emojify earth_americas"],[/:earth_asia:/g,"emojify earth_asia"],[/:volcano:/g,"emojify volcano"],[/:milky_way:/g,"emojify milky_way"],[/:partly_sunny:/g,"emojify partly_sunny"],[/:octocat:/g,"emojify octocat"],[/:squirrel:/g,"emojify squirrel"]],f=[[/:bamboo:/g,"emojify bamboo"],[/:gift_heart:/g,"emojify gift_heart"],[/:dolls:/g,"emojify dolls"],[/:school_satchel:/g,"emojify school_satchel"],[/:mortar_board:/g,"emojify mortar_board"],[/:flags:/g,"emojify flags"],[/:fireworks:/g,"emojify fireworks"],[/:sparkler:/g,"emojify sparkler"],[/:wind_chime:/g,"emojify wind_chime"],[/:rice_scene:/g,"emojify rice_scene"],[/:jack_o_lantern:/g,"emojify jack_o_lantern"],[/:ghost:/g,"emojify ghost"],[/:santa:/g,"emojify santa"],[/:christmas_tree:/g,"emojify christmas_tree"],[/:gift:/g,"emojify gift"],[/:bell:/g,"emojify bell"],[/:no_bell:/g,"emojify no_bell"],[/:tanabata_tree:/g,"emojify tanabata_tree"],[/:tada:/g,"emojify tada"],[/:confetti_ball:/g,"emojify confetti_ball"],[/:balloon:/g,"emojify balloon"],[/:crystal_ball:/g,"emojify crystal_ball"],[/:cd:/g,"emojify cd"],[/:dvd:/g,"emojify dvd"],[/:floppy_disk:/g,"emojify floppy_disk"],[/:camera:/g,"emojify camera"],[/:video_camera:/g,"emojify video_camera"],[/:movie_camera:/g,"emojify movie_camera"],[/:computer:/g,"emojify computer"],[/:tv:/g,"emojify tv"],[/:iphone:/g,"emojify iphone"],[/:phone:/g,"emojify phone"],[/:telephone:/g,"emojify telephone"],[/:telephone_receiver:/g,"emojify telephone_receiver"],[/:pager:/g,"emojify pager"],[/:fax:/g,"emojify fax"],[/:minidisc:/g,"emojify minidisc"],[/:vhs:/g,"emojify vhs"],[/:sound:/g,"emojify sound"],[/:speaker:/g,"emojify speaker"],[/:mute:/g,"emojify mute"],[/:loudspeaker:/g,"emojify loudspeaker"],[/:mega:/g,"emojify mega"],[/:hourglass:/g,"emojify hourglass"],[/:hourglass_flowing_sand:/g,"emojify hourglass_flowing_sand"],[/:alarm_clock:/g,"emojify alarm_clock"],[/:watch:/g,"emojify watch"],[/:radio:/g,"emojify radio"],[/:satellite:/g,"emojify satellite"],[/:loop:/g,"emojify loop"],[/:mag:/g,"emojify mag"],[/:mag_right:/g,"emojify mag_right"],[/:unlock:/g,"emojify unlock"],[/:lock:/g,"emojify lock"],[/:lock_with_ink_pen:/g,"emojify lock_with_ink_pen"],[/:closed_lock_with_key:/g,"emojify closed_lock_with_key"],[/:key:/g,"emojify key"],[/:bulb:/g,"emojify bulb"],[/:flashlight:/g,"emojify flashlight"],[/:high_brightness:/g,"emojify high_brightness"],[/:low_brightness:/g,"emojify low_brightness"],[/:electric_plug:/g,"emojify electric_plug"],[/:battery:/g,"emojify battery"],[/:calling:/g,"emojify calling"],[/:email:/g,"emojify email"],[/:mailbox:/g,"emojify mailbox"],[/:postbox:/g,"emojify postbox"],[/:bath:/g,"emojify bath"],[/:bathtub:/g,"emojify bathtub"],[/:shower:/g,"emojify shower"],[/:toilet:/g,"emojify toilet"],[/:wrench:/g,"emojify wrench"],[/:nut_and_bolt:/g,"emojify nut_and_bolt"],[/:hammer:/g,"emojify hammer"],[/:seat:/g,"emojify seat"],[/:moneybag:/g,"emojify moneybag"],[/:yen:/g,"emojify yen"],[/:dollar:/g,"emojify dollar"],[/:pound:/g,"emojify pound"],[/:euro:/g,"emojify euro"],[/:credit_card:/g,"emojify credit_card"],[/:money_with_wings:/g,"emojify money_with_wings"],[/:e-mail:/g,"emojify e-mail"],[/:inbox_tray:/g,"emojify inbox_tray"],[/:outbox_tray:/g,"emojify outbox_tray"],[/:envelope:/g,"emojify envelope"],[/:incoming_envelope:/g,"emojify incoming_envelope"],[/:postal_horn:/g,"emojify postal_horn"],[/:mailbox_closed:/g,"emojify mailbox_closed"],[/:mailbox_with_mail:/g,"emojify mailbox_with_mail"],[/:mailbox_with_no_mail:/g,"emojify mailbox_with_no_mail"],[/:door:/g,"emojify door"],[/:smoking:/g,"emojify smoking"],[/:bomb:/g,"emojify bomb"],[/:gun:/g,"emojify gun"],[/:hocho:/g,"emojify hocho"],[/:pill:/g,"emojify pill"],[/:syringe:/g,"emojify syringe"],[/:page_facing_up:/g,"emojify page_facing_up"],[/:page_with_curl:/g,"emojify page_with_curl"],[/:bookmark_tabs:/g,"emojify bookmark_tabs"],[/:bar_chart:/g,"emojify bar_chart"],[/:chart_with_upwards_trend:/g,"emojify chart_with_upwards_trend"],[/:chart_with_downwards_trend:/g,"emojify chart_with_downwards_trend"],[/:scroll:/g,"emojify scroll"],[/:clipboard:/g,"emojify clipboard"],[/:calendar:/g,"emojify calendar"],[/:date:/g,"emojify date"],[/:card_index:/g,"emojify card_index"],[/:file_folder:/g,"emojify file_folder"],[/:open_file_folder:/g,"emojify open_file_folder"],[/:scissors:/g,"emojify scissors"],[/:pushpin:/g,"emojify pushpin"],[/:paperclip:/g,"emojify paperclip"],[/:black_nib:/g,"emojify black_nib"],[/:pencil2:/g,"emojify pencil2"],[/:straight_ruler:/g,"emojify straight_ruler"],[/:triangular_ruler:/g,"emojify triangular_ruler"],[/:closed_book:/g,"emojify closed_book"],[/:green_book:/g,"emojify green_book"],[/:blue_book:/g,"emojify blue_book"],[/:orange_book:/g,"emojify orange_book"],[/:notebook:/g,"emojify notebook"],[/:notebook_with_decorative_cover:/g,"emojify notebook_with_decorative_cover"],[/:ledger:/g,"emojify ledger"],[/:books:/g,"emojify books"],[/:bookmark:/g,"emojify bookmark"],[/:name_badge:/g,"emojify name_badge"],[/:microscope:/g,"emojify microscope"],[/:telescope:/g,"emojify telescope"],[/:newspaper:/g,"emojify newspaper"],[/:football:/g,"emojify football"],[/:basketball:/g,"emojify basketball"],[/:soccer:/g,"emojify soccer"],[/:baseball:/g,"emojify baseball"],[/:tennis:/g,"emojify tennis"],[/:8ball:/g,"emojify eightball"],[/:rugby_football:/g,"emojify rugby_football"],[/:bowling:/g,"emojify bowling"],[/:golf:/g,"emojify golf"],[/:mountain_bicyclist:/g,"emojify mountain_bicyclist"],[/:bicyclist:/g,"emojify bicyclist"],[/:horse_racing:/g,"emojify horse_racing"],[/:snowboarder:/g,"emojify snowboarder"],[/:swimmer:/g,"emojify swimmer"],[/:surfer:/g,"emojify surfer"],[/:ski:/g,"emojify ski"],[/:spades:/g,"emojify spades"],[/:hearts:/g,"emojify hearts"],[/:clubs:/g,"emojify clubs"],[/:diamonds:/g,"emojify diamonds"],[/:gem:/g,"emojify gem"],[/:ring:/g,"emojify ring"],[/:trophy:/g,"emojify trophy"],[/:musical_score:/g,"emojify musical_score"],[/:musical_keyboard:/g,"emojify musical_keyboard"],[/:violin:/g,"emojify violin"],[/:space_invader:/g,"emojify space_invader"],[/:video_game:/g,"emojify video_game"],[/:black_joker:/g,"emojify black_joker"],[/:flower_playing_cards:/g,"emojify flower_playing_cards"],[/:game_die:/g,"emojify game_die"],[/:dart:/g,"emojify dart"],[/:mahjong:/g,"emojify mahjong"],[/:clapper:/g,"emojify clapper"],[/:memo:/g,"emojify memo"],[/:pencil:/g,"emojify pencil"],[/:book:/g,"emojify book"],[/:art:/g,"emojify art"],[/:microphone:/g,"emojify microphone"],[/:headphones:/g,"emojify headphones"],[/:trumpet:/g,"emojify trumpet"],[/:saxophone:/g,"emojify saxophone"],[/:guitar:/g,"emojify guitar"],[/:shoe:/g,"emojify shoe"],[/:sandal:/g,"emojify sandal"],[/:high_heel:/g,"emojify high_heel"],[/:lipstick:/g,"emojify lipstick"],[/:boot:/g,"emojify boot"],[/:shirt:/g,"emojify shirt"],[/:tshirt:/g,"emojify tshirt"],[/:necktie:/g,"emojify necktie"],[/:womans_clothes:/g,"emojify womans_clothes"],[/:dress:/g,"emojify dress"],[/:running_shirt_with_sash:/g,"emojify running_shirt_with_sash"],[/:jeans:/g,"emojify jeans"],[/:kimono:/g,"emojify kimono"],[/:bikini:/g,"emojify bikini"],[/:ribbon:/g,"emojify ribbon"],[/:tophat:/g,"emojify tophat"],[/:crown:/g,"emojify crown"],[/:womans_hat:/g,"emojify womans_hat"],[/:mans_shoe:/g,"emojify mans_shoe"],[/:closed_umbrella:/g,"emojify closed_umbrella"],[/:briefcase:/g,"emojify briefcase"],[/:handbag:/g,"emojify handbag"],[/:pouch:/g,"emojify pouch"],[/:purse:/g,"emojify purse"],[/:eyeglasses:/g,"emojify eyeglasses"],[/:fishing_pole_and_fish:/g,"emojify fishing_pole_and_fish"],[/:coffee:/g,"emojify coffee"],[/:tea:/g,"emojify tea"],[/:sake:/g,"emojify sake"],[/:baby_bottle:/g,"emojify baby_bottle"],[/:beer:/g,"emojify beer"],[/:beers:/g,"emojify beers"],[/:cocktail:/g,"emojify cocktail"],[/:tropical_drink:/g,"emojify tropical_drink"],[/:wine_glass:/g,"emojify wine_glass"],[/:fork_and_knife:/g,"emojify fork_and_knife"],[/:pizza:/g,"emojify pizza"],[/:hamburger:/g,"emojify hamburger"],[/:fries:/g,"emojify fries"],[/:poultry_leg:/g,"emojify poultry_leg"],[/:meat_on_bone:/g,"emojify meat_on_bone"],[/:spaghetti:/g,"emojify spaghetti"],[/:curry:/g,"emojify curry"],[/:fried_shrimp:/g,"emojify fried_shrimp"],[/:bento:/g,"emojify bento"],[/:sushi:/g,"emojify sushi"],[/:fish_cake:/g,"emojify fish_cake"],[/:rice_ball:/g,"emojify rice_ball"],[/:rice_cracker:/g,"emojify rice_cracker"],[/:rice:/g,"emojify rice"],[/:ramen:/g,"emojify ramen"],[/:stew:/g,"emojify stew"],[/:oden:/g,"emojify oden"],[/:dango:/g,"emojify dango"],[/:egg:/g,"emojify egg"],[/:bread:/g,"emojify bread"],[/:doughnut:/g,"emojify doughnut"],[/:custard:/g,"emojify custard"],[/:icecream:/g,"emojify icecream"],[/:ice_cream:/g,"emojify ice_cream"],[/:shaved_ice:/g,"emojify shaved_ice"],[/:birthday:/g,"emojify birthday"],[/:cake:/g,"emojify cake"],[/:cookie:/g,"emojify cookie"],[/:chocolate_bar:/g,"emojify chocolate_bar"],[/:candy:/g,"emojify candy"],[/:lollipop:/g,"emojify lollipop"],[/:honey_pot:/g,"emojify honey_pot"],[/:apple:/g,"emojify apple"],[/:green_apple:/g,"emojify green_apple"],[/:tangerine:/g,"emojify tangerine"],[/:lemon:/g,"emojify lemon"],[/:cherries:/g,"emojify cherries"],[/:grapes:/g,"emojify grapes"],[/:watermelon:/g,"emojify watermelon"],[/:strawberry:/g,"emojify strawberry"],[/:peach:/g,"emojify peach"],[/:melon:/g,"emojify melon"],[/:banana:/g,"emojify banana"],[/:pear:/g,"emojify pear"],[/:pineapple:/g,"emojify pineapple"],[/:sweet_potato:/g,"emojify sweet_potato"],[/:eggplant:/g,"emojify eggplant"],[/:tomato:/g,"emojify tomato"],[/:corn:/g,"emojify corn"]],g=[[/:109:/g,"emojify onezeronine"],[/:house:/g,"emojify house"],[/:house_with_garden:/g,"emojify house_with_garden"],[/:school:/g,"emojify school"],[/:office:/g,"emojify office"],[/:post_office:/g,"emojify post_office"],[/:hospital:/g,"emojify hospital"],[/:bank:/g,"emojify bank"],[/:convenience_store:/g,"emojify convenience_store"],[/:love_hotel:/g,"emojify love_hotel"],[/:hotel:/g,"emojify hotel"],[/:wedding:/g,"emojify wedding"],[/:church:/g,"emojify church"],[/:department_store:/g,"emojify department_store"],[/:european_post_office:/g,"emojify european_post_office"],[/:city_sunrise:/g,"emojify city_sunrise"],[/:city_sunset:/g,"emojify city_sunset"],[/:japanese_castle:/g,"emojify japanese_castle"],[/:european_castle:/g,"emojify european_castle"],[/:tent:/g,"emojify tent"],[/:factory:/g,"emojify factory"],[/:tokyo_tower:/g,"emojify tokyo_tower"],[/:japan:/g,"emojify japan"],[/:mount_fuji:/g,"emojify mount_fuji"],[/:sunrise_over_mountains:/g,"emojify sunrise_over_mountains"],[/:sunrise:/g,"emojify sunrise"],[/:stars:/g,"emojify stars"],[/:statue_of_liberty:/g,"emojify statue_of_liberty"],[/:bridge_at_night:/g,"emojify bridge_at_night"],[/:carousel_horse:/g,"emojify carousel_horse"],[/:rainbow:/g,"emojify rainbow"],[/:ferris_wheel:/g,"emojify ferris_wheel"],[/:fountain:/g,"emojify fountain"],[/:roller_coaster:/g,"emojify roller_coaster"],[/:ship:/g,"emojify ship"],[/:speedboat:/g,"emojify speedboat"],[/:boat:/g,"emojify boat"],[/:sailboat:/g,"emojify sailboat"],[/:rowboat:/g,"emojify rowboat"],[/:anchor:/g,"emojify anchor"],[/:rocket:/g,"emojify rocket"],[/:airplane:/g,"emojify airplane"],[/:helicopter:/g,"emojify helicopter"],[/:steam_locomotive:/g,"emojify steam_locomotive"],[/:tram:/g,"emojify tram"],[/:mountain_railway:/g,"emojify mountain_railway"],[/:bike:/g,"emojify bike"],[/:aerial_tramway:/g,"emojify aerial_tramway"],[/:suspension_railway:/g,"emojify suspension_railway"],[/:mountain_cableway:/g,"emojify mountain_cableway"],[/:tractor:/g,"emojify tractor"],[/:blue_car:/g,"emojify blue_car"],[/:oncoming_automobile:/g,"emojify oncoming_automobile"],[/:car:/g,"emojify car"],[/:red_car:/g,"emojify red_car"],[/:taxi:/g,"emojify taxi"],[/:oncoming_taxi:/g,"emojify oncoming_taxi"],[/:articulated_lorry:/g,"emojify articulated_lorry"],[/:bus:/g,"emojify bus"],[/:oncoming_bus:/g,"emojify oncoming_bus"],[/:rotating_light:/g,"emojify rotating_light"],[/:police_car:/g,"emojify police_car"],[/:oncoming_police_car:/g,"emojify oncoming_police_car"],[/:fire_engine:/g,"emojify fire_engine"],[/:ambulance:/g,"emojify ambulance"],[/:minibus:/g,"emojify minibus"],[/:truck:/g,"emojify truck"],[/:train:/g,"emojify train"],[/:station:/g,"emojify station"],[/:train2:/g,"emojify train2"],[/:bullettrain_front:/g,"emojify bullettrain_front"],[/:bullettrain_side:/g,"emojify bullettrain_side"],[/:light_rail:/g,"emojify light_rail"],[/:monorail:/g,"emojify monorail"],[/:railway_car:/g,"emojify railway_car"],[/:trolleybus:/g,"emojify trolleybus"],[/:ticket:/g,"emojify ticket"],[/:fuelpump:/g,"emojify fuelpump"],[/:vertical_traffic_light:/g,"emojify vertical_traffic_light"],[/:traffic_light:/g,"emojify traffic_light"],[/:warning:/g,"emojify warning"],[/:construction:/g,"emojify construction"],[/:beginner:/g,"emojify beginner"],[/:atm:/g,"emojify atm"],[/:slot_machine:/g,"emojify slot_machine"],[/:busstop:/g,"emojify busstop"],[/:barber:/g,"emojify barber"],[/:hotsprings:/g,"emojify hotsprings"],[/:checkered_flag:/g,"emojify checkered_flag"],[/:crossed_flags:/g,"emojify crossed_flags"],[/:izakaya_lantern:/g,"emojify izakaya_lantern"],[/:moyai:/g,"emojify moyai"],[/:circus_tent:/g,"emojify circus_tent"],[/:performing_arts:/g,"emojify performing_arts"],[/:round_pushpin:/g,"emojify round_pushpin"],[/:triangular_flag_on_post:/g,"emojify triangular_flag_on_post"],[/:jp:/g,"emojify jp"],[/:kr:/g,"emojify kr"],[/:cn:/g,"emojify cn"],[/:us:/g,"emojify us"],[/:fr:/g,"emojify fr"],[/:es:/g,"emojify es"],[/:it:/g,"emojify it"],[/:ru:/g,"emojify ru"],[/:gb:/g,"emojify gb"],[/:uk:/g,"emojify uk"],[/:de:/g,"emojify de"]],h=[[/:one:/g,"emojify one"],[/:two:/g,"emojify two"],[/:three:/g,"emojify three"],[/:four:/g,"emojify four"],[/:five:/g,"emojify five"],[/:six:/g,"emojify six"],[/:seven:/g,"emojify seven"],[/:eight:/g,"emojify eight"],[/:nine:/g,"emojify nine"],[/:keycap_ten:/g,"emojify keycap_ten"],[/:1234:/g,"emojify onetwothreefour"],[/:zero:/g,"emojify zero"],[/:hash:/g,"emojify hash"],[/:symbols:/g,"emojify symbols"],[/:arrow_backward:/g,"emojify arrow_backward"],[/:arrow_down:/g,"emojify arrow_down"],[/:arrow_forward:/g,"emojify arrow_forward"],[/:arrow_left:/g,"emojify arrow_left"],[/:capital_abcd:/g,"emojify capital_abcd"],[/:abcd:/g,"emojify abcd"],[/:abc:/g,"emojify abc"],[/:arrow_lower_left:/g,"emojify arrow_lower_left"],[/:arrow_lower_right:/g,"emojify arrow_lower_right"],[/:arrow_right:/g,"emojify arrow_right"],[/:arrow_up:/g,"emojify arrow_up"],[/:arrow_upper_left:/g,"emojify arrow_upper_left"],[/:arrow_upper_right:/g,"emojify arrow_upper_right"],[/:arrow_double_down:/g,"emojify arrow_double_down"],[/:arrow_double_up:/g,"emojify arrow_double_up"],[/:arrow_down_small:/g,"emojify arrow_down_small"],[/:arrow_heading_down:/g,"emojify arrow_heading_down"],[/:arrow_heading_up:/g,"emojify arrow_heading_up"],[/:leftwards_arrow_with_hook:/g,"emojify leftwards_arrow_with_hook"],[/:arrow_right_hook:/g,"emojify arrow_right_hook"],[/:left_right_arrow:/g,"emojify left_right_arrow"],[/:arrow_up_down:/g,"emojify arrow_up_down"],[/:arrow_up_small:/g,"emojify arrow_up_small"],[/:arrows_clockwise:/g,"emojify arrows_clockwise"],[/:arrows_counterclockwise:/g,"emojify arrows_counterclockwise"],[/:rewind:/g,"emojify rewind"],[/:fast_forward:/g,"emojify fast_forward"],[/:information_source:/g,"emojify information_source"],[/:ok:/g,"emojify ok"],[/:twisted_rightwards_arrows:/g,"emojify twisted_rightwards_arrows"],[/:repeat:/g,"emojify repeat"],[/:repeat_one:/g,"emojify repeat_one"],[/:new:/g,"emojify new"],[/:top:/g,"emojify top"],[/:up:/g,"emojify up"],[/:cool:/g,"emojify cool"],[/:free:/g,"emojify free"],[/:ng:/g,"emojify ng"],[/:cinema:/g,"emojify cinema"],[/:koko:/g,"emojify koko"],[/:signal_strength:/g,"emojify signal_strength"],[/:u5272:/g,"emojify u5272"],[/:u5408:/g,"emojify u5408"],[/:u55b6:/g,"emojify u55b6"],[/:u6307:/g,"emojify u6307"],[/:u6708:/g,"emojify u6708"],[/:u6709:/g,"emojify u6709"],[/:u6e80:/g,"emojify u6e80"],[/:u7121:/g,"emojify u7121"],[/:u7533:/g,"emojify u7533"],[/:u7a7a:/g,"emojify u7a7a"],[/:u7981:/g,"emojify u7981"],[/:sa:/g,"emojify sa"],[/:restroom:/g,"emojify restroom"],[/:mens:/g,"emojify mens"],[/:womens:/g,"emojify womens"],[/:baby_symbol:/g,"emojify baby_symbol"],[/:no_smoking:/g,"emojify no_smoking"],[/:parking:/g,"emojify parking"],[/:wheelchair:/g,"emojify wheelchair"],[/:metro:/g,"emojify metro"],[/:baggage_claim:/g,"emojify baggage_claim"],[/:accept:/g,"emojify accept"],[/:wc:/g,"emojify wc"],[/:potable_water:/g,"emojify potable_water"],[/:put_litter_in_its_place:/g,"emojify put_litter_in_its_place"],[/:secret:/g,"emojify secret"],[/:congratulations:/g,"emojify congratulations"],[/:m:/g,"emojify m"],[/:passport_control:/g,"emojify passport_control"],[/:left_luggage:/g,"emojify left_luggage"],[/:customs:/g,"emojify customs"],[/:ideograph_advantage:/g,"emojify ideograph_advantage"],[/:cl:/g,"emojify cl"],[/:sos:/g,"emojify sos"],[/:id:/g,"emojify id"],[/:no_entry_sign:/g,"emojify no_entry_sign"],[/:underage:/g,"emojify underage"],[/:no_mobile_phones:/g,"emojify no_mobile_phones"],[/:do_not_litter:/g,"emojify do_not_litter"],[/:non-potable_water:/g,"emojify non-potable_water"],[/:no_bicycles:/g,"emojify no_bicycles"],[/:no_pedestrians:/g,"emojify no_pedestrians"],[/:children_crossing:/g,"emojify children_crossing"],[/:no_entry:/g,"emojify no_entry"],[/:eight_spoked_asterisk:/g,"emojify eight_spoked_asterisk"],[/:eight_pointed_black_star:/g,"emojify eight_pointed_black_star"],[/:heart_decoration:/g,"emojify heart_decoration"],[/:vs:/g,"emojify vs"],[/:vibration_mode:/g,"emojify vibration_mode"],[/:mobile_phone_off:/g,"emojify mobile_phone_off"],[/:chart:/g,"emojify chart"],[/:currency_exchange:/g,"emojify currency_exchange"],[/:aries:/g,"emojify aries"],[/:taurus:/g,"emojify taurus"],[/:gemini:/g,"emojify gemini"],[/:cancer:/g,"emojify cancer"],[/:leo:/g,"emojify leo"],[/:virgo:/g,"emojify virgo"],[/:libra:/g,"emojify libra"],[/:scorpius:/g,"emojify scorpius"],[/:sagittarius:/g,"emojify sagittarius"],[/:capricorn:/g,"emojify capricorn"],[/:aquarius:/g,"emojify aquarius"],[/:pisces:/g,"emojify pisces"],[/:ophiuchus:/g,"emojify ophiuchus"],[/:six_pointed_star:/g,"emojify six_pointed_star"],[/:negative_squared_cross_mark:/g,"emojify negative_squared_cross_mark"],[/:a:/g,"emojify a"],[/:b:/g,"emojify b"],[/:ab:/g,"emojify ab"],[/:o2:/g,"emojify o2"],[/:diamond_shape_with_a_dot_inside:/g,"emojify diamond_shape_with_a_dot_inside"],[/:recycle:/g,"emojify recycle"],[/:end:/g,"emojify end"],[/:on:/g,"emojify on"],[/:soon:/g,"emojify soon"],[/:clock1:/g,"emojify clock1"],[/:clock130:/g,"emojify clock130"],[/:clock10:/g,"emojify clock10"],[/:clock1030:/g,"emojify clock1030"],[/:clock11:/g,"emojify clock11"],[/:clock1130:/g,"emojify clock1130"],[/:clock12:/g,"emojify clock12"],[/:clock1230:/g,"emojify clock1230"],[/:clock2:/g,"emojify clock2"],[/:clock230:/g,"emojify clock230"],[/:clock3:/g,"emojify clock3"],[/:clock330:/g,"emojify clock330"],[/:clock4:/g,"emojify clock4"],[/:clock430:/g,"emojify clock430"],[/:clock5:/g,"emojify clock5"],[/:clock530:/g,"emojify clock530"],[/:clock6:/g,"emojify clock6"],[/:clock630:/g,"emojify clock630"],[/:clock7:/g,"emojify clock7"],[/:clock730:/g,"emojify clock730"],[/:clock8:/g,"emojify clock8"],[/:clock830:/g,"emojify clock830"],[/:clock9:/g,"emojify clock9"],[/:clock930:/g,"emojify clock930"],[/:heavy_dollar_sign:/g,"emojify heavy_dollar_sign"],[/:copyright:/g,"emojify copyright"],[/:registered:/g,"emojify registered"],[/:tm:/g,"emojify tm"],[/:x:/g,"emojify x"],[/:heavy_exclamation_mark:/g,"emojify heavy_exclamation_mark"],[/:bangbang:/g,"emojify bangbang"],[/:interrobang:/g,"emojify interrobang"],[/:o:/g,"emojify o"],[/:heavy_multiplication_x:/g,"emojify heavy_multiplication_x"],[/:heavy_plus_sign:/g,"emojify heavy_plus_sign"],[/:heavy_minus_sign:/g,"emojify heavy_minus_sign"],[/:heavy_division_sign:/g,"emojify heavy_division_sign"],[/:white_flower:/g,"emojify white_flower"],[/:100:/g,"emojify onehundred"],[/:heavy_check_mark:/g,"emojify heavy_check_mark"],[/:ballot_box_with_check:/g,"emojify ballot_box_with_check"],[/:radio_button:/g,"emojify radio_button"],[/:link:/g,"emojify link"],[/:curly_loop:/g,"emojify curly_loop"],[/:wavy_dash:/g,"emojify wavy_dash"],[/:part_alternation_mark:/g,"emojify part_alternation_mark"],[/:trident:/g,"emojify trident"],[/:black_square:/g,"emojify black_square"],[/:white_square:/g,"emojify white_square"],[/:white_check_mark:/g,"emojify white_check_mark"],[/:black_square_button:/g,"emojify black_square_button"],[/:white_square_button:/g,"emojify white_square_button"],[/:black_circle:/g,"emojify black_circle"],[/:white_circle:/g,"emojify white_circle"],[/:red_circle:/g,"emojify red_circle"],[/:large_blue_circle:/g,"emojify large_blue_circle"],[/:large_blue_diamond:/g,"emojify large_blue_diamond"],[/:large_orange_diamond:/g,"emojify large_orange_diamond"],[/:small_blue_diamond:/g,"emojify small_blue_diamond"],[/:small_orange_diamond:/g,"emojify small_orange_diamond"],[/:small_red_triangle:/g,"emojify small_red_triangle"],[/:small_red_triangle_down:/g,"emojify small_red_triangle_down"],[/:shipit:/g,"emojify shipit"]],i=function(a,b,c){for(var d=a.childNodes.length;d-->0;){var e=a.childNodes[d];
if(1==e.nodeType){var f,g=e.tagName.toLowerCase();e.hasAttribute("class")&&(f=e.getAttribute("class").toLowerCase()),f?"script"!==g&&"style"!==g&&"textarea"!==g&&"no-emojify"!==f&&i(e,b,c):"script"!==g&&"style"!==g&&"textarea"!==g&&i(e,b,c)}else if(3==e.nodeType){var h=[];if("string"==typeof b)console.error("Accepts regex only");else for(var j;j=b.exec(e.data);)h.push(j);for(var k=h.length;k-->0;)c.call(window,e,h[k])}}};return{defaultConfig:{emojify_tag_type:"div",only_crawl_id:null,emoticons_enabled:!0,people_enabled:!1,nature_enabled:!1,objects_enabled:!1,places_enabled:!1,symbols_enabled:!1},setConfig:function(a){this.defaultConfig.emojify_tag_type="undefined"!=typeof a.emojify_tag_type?a.emojify_tag_type:this.defaultConfig.emojify_tag_type,this.defaultConfig.emoticons_enabled="undefined"!=typeof a.emoticons_enabled?a.emoticons_enabled:this.defaultConfig.emoticons_enabled,this.defaultConfig.people_enabled="undefined"!=typeof a.people_enabled?a.people_enabled:this.defaultConfig.people_enabled,this.defaultConfig.nature_enabled="undefined"!=typeof a.nature_enabled?a.nature_enabled:this.defaultConfig.nature_enabled,this.defaultConfig.objects_enabled="undefined"!=typeof a.objects_enabled?a.objects_enabled:this.defaultConfig.objects_enabled,this.defaultConfig.places_enabled="undefined"!=typeof a.places_enabled?a.places_enabled:this.defaultConfig.places_enabled,this.defaultConfig.symbols_enabled="undefined"!=typeof a.symbols_enabled?a.symbols_enabled:this.defaultConfig.symbols_enabled,this.defaultConfig.only_crawl_id="undefined"!=typeof a.only_crawl_id?a.only_crawl_id:this.defaultConfig.only_crawl_id},run:function(a){var j=[],k=d.slice(0),l=e.slice(0),m=f.slice(0),n=g.slice(0),o=h.slice(0),p=c.slice(0);this.defaultConfig.people_enabled&&j.push(k),this.defaultConfig.nature_enabled&&j.push(l),this.defaultConfig.objects_enabled&&j.push(m),this.defaultConfig.places_enabled&&j.push(n),this.defaultConfig.symbols_enabled&&j.push(o),this.defaultConfig.emoticons_enabled&&j.push(p),"undefined"==typeof a&&(a=this.defaultConfig.only_crawl_id?b.getElementById(this.defaultConfig.only_crawl_id):b.body);for(var q=0;q<j.length;q++)for(var r;r=j[q].shift();)i(a,r[0],function(a,c){var d=b.createElement(this.emojify.defaultConfig.emojify_tag_type);d.setAttribute("class",r[1]),d.setAttribute("title",":"+r[1].replace(/emojify /g,"")+":"),a.splitText(c.index),a.nextSibling.nodeValue=a.nextSibling.nodeValue.substr(c[0].length,a.nextSibling.nodeValue.length),d.appendChild(a.splitText(c.index)),a.parentNode.insertBefore(d,a.nextSibling)})}}}();a.emojify=b}(this);