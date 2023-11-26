
/////////     FOR PRICING & RECOMMENDATION PAGES     /////////

textDesktopPlan = document.getElementById('ts-price-desktop-plan');
textWebPlan = document.getElementById('ts-price-web-plan');
textEnterprisePlan = document.getElementById('ts-price-enterprise-plan');

textDesktopBundle = document.getElementById('ts-price-desktop-bundle');
textWebBundle = document.getElementById('ts-price-web-bundle');
textEnterpriseBundle = document.getElementById('ts-price-enterprise-bundle');

buyButtonDesktop = document.getElementById('ts-buy-ra-desktop');
buyButtonWeb = document.getElementById('ts-buy-ra-web');
buyButtonEnterprise = document.getElementById('ts-buy-ra-enterprise');

buyButtonDesktopBundle = document.getElementById('ts-buy-ra-desktop-bundle');
buyButtonWebBundle = document.getElementById('ts-buy-ra-web-bundle');
buyButtonEnterpriseBundle = document.getElementById('ts-buy-ra-enterprise-bundle');

compareDesktopBundle = document.getElementById('ts-compare-ra-desktop-bundle');
compareWebBundle = document.getElementById('ts-compare-ra-web-bundle');
compareEnterpriseBundle = document.getElementById('ts-compare-ra-enterprise-bundle');

compareDesktopBundleTheory = document.getElementById('ts-compare-ra-desktop-bundle-theory');
compareWebBundleTheory = document.getElementById('ts-compare-ra-web-bundle-theory');
compareEnterpriseBundleTheory = document.getElementById('ts-compare-ra-enterprise-bundle-theory');

compareDesktopPlan = document.getElementById('ts-compare-ra-desktop-plan');
compareWebPlan = document.getElementById('ts-compare-ra-web-plan');
compareEnterprisePlan = document.getElementById('ts-compare-ra-enterprise-plan');

usersPopMessagePlanWith = document.getElementById('users-pop-message-plan-with');
usersPopMessagePlanWithout = document.getElementById('users-pop-message-plan-without');
usPopMessagePlanWith = document.getElementById('us-pop-message-plan-with');
usPopMessagePlanWithout = document.getElementById('us-pop-message-plan-without');
bundlePopMessagePlanWith = document.getElementById('twofa-pop-message-with');
bundlePopMessagePlanWithout = document.getElementById('twofa-pop-message-without');

toShowBundle = document.getElementsByClassName('bundleOn');
toHideBundle = document.getElementsByClassName('bundleoff w-embed');
hidePlus = document.getElementsByClassName('ts-plus-orange-gradient-special');
switchIncluded = document.getElementsByClassName('iconToSwitch');
tooltipUsersUpdate = document.getElementsByClassName('ts-tooltip-users-update');

toHideSecuAddon = document.getElementById('toHideSecuAddon');
toHideSecuAddonSibling = document.getElementById('toHideSecuAddonSibling');
toHide2FAAddon = document.getElementById('toHide2FAAddon');
toHide2FAAddonSibling = document.getElementById('toHide2FAAddonSibling');

usState = undefined;

u3 = document.getElementById('threeUsersPlan');
u5 = document.getElementById('fiveUsersPlan');
u10 = document.getElementById('tenUsersPlan');
u25 = document.getElementById('twentyFiveUsersPlan');
u50 = document.getElementById('unlimitedUsersPlan');

yB = document.getElementById('yesBundle');
nB = document.getElementById('noBundle');

rs1  = document.getElementById('oneAgentRS');
rs5  = document.getElementById('fiveAgentRS');
rs10 = document.getElementById('tenAgentRS');
rs15 = document.getElementById('fifteenAgentRS');
rs20 = document.getElementById('twentyAgentRS');
rs25 = document.getElementById('twentyFiveAgentRS');

checkRSPage = document.URL.indexOf("remote-support");
checkRWPage = document.URL.indexOf("remote-work");
checkASPage = document.URL.indexOf("advanced-security");
checkSMPage = document.URL.indexOf("server-monitoring");
checkRAPage = checkRSPage + checkASPage + checkRWPage + checkSMPage;

dataFsc = document.querySelectorAll('[data-fsc-item-path-value]');

fastspringRaEditionDesktopBase = 'VER-PTR';
fastspringRaEditionWebBase = 'VER-MOB';
fastspringRaEditionEnterpriseBase = 'VER-ENT';
fastspringRaBundleDesktopBase = 'VER-DP';
fastspringRaBundleWebBase = 'VER-WP';
fastspringRaBundleEnterpriseBase = 'VER-PLUS';
fastspringRsBase = 'RS-DEF-';

priceAddonEssentials = 50;
priceAddonUltimate = 250;
priceAddon2FA = 250;
priceSMBundle = 90;
priceRSBundle = 96;


function State(product, plan, type, forUnit, rawPrice, addEssentials, addUltimate, add2FA){

    this.product = product,
    this.plan = plan,
    this.type = type,
    this.forUnit = forUnit,
    this.rawPrice = rawPrice,
    this.addEssentials = addEssentials,
    this.addUltimate = addUltimate,
    this.add2FA = add2FA,

    this.price = function(perUnit){

        if     (product == 'Remote Access' && plan == 'Desktop'){        var priceNoUS = this.rawPrice + priceAddonEssentials * this.addEssentials + priceAddonUltimate * this.addUltimate;}
        else if(product == 'Remote Access' || product == 'Remote Work'){ var priceNoUS = this.rawPrice + priceAddonEssentials * this.addEssentials + priceAddonUltimate * this.addUltimate + priceAddon2FA * this.add2FA;}
        else   {                                                         var priceNoUS = this.rawPrice}

        if      (usState == 0){var price = priceNoUS;}
        else if (usState == 1 || usState == undefined){var price = priceNoUS * 1.21;}
        else if (usState == 2){var price = priceNoUS * 1.36;}
        else if (usState == 3){var price = priceNoUS * 1.45;}

        if(perUnit == 'perUnit'){ return Math.round(price / this.forUnit);}
        else{                     return Math.round(price)}

    }

    this.comparePrice = function(bundle){

        if     (bundle == 'Desktop'){    var priceNoUS = this.rawPrice + priceSMBundle + priceRSBundle + priceAddonEssentials;}
        else if(bundle == 'Web'){        var priceNoUS = this.rawPrice + priceSMBundle + priceRSBundle + priceAddonEssentials + priceAddon2FA;}
        else if(bundle == 'Enterprise'){ var priceNoUS = this.rawPrice + priceSMBundle + priceRSBundle + priceAddonUltimate   + priceAddon2FA;}

        if      (usState == 0){var price = priceNoUS;}
        else if (usState == 1 || usState == undefined){var price = priceNoUS * 1.21;}
        else if (usState == 2){var price = priceNoUS * 1.36;}
        else if (usState == 3){var price = priceNoUS * 1.45;}

        //return Math.round(price / this.forUnit);
        return Math.round(price);

    }

}


var states = [ // ne surtout pas changer ordre des object dans l'array, la fonction de calcul du prix affiché sur les pricing page (edition & bundles) en dépend.

    new State('Remote Access',       'Desktop','Edition', 3, 150,0,0,0),
    new State('Remote Access',       'Desktop','Edition', 3, 150,1,0,0),
    new State('Remote Access',       'Desktop','Edition', 3, 150,0,1,0),
    new State('Remote Access',       'Desktop','Edition', 3, 150,0,0,1),
    new State('Remote Access',       'Desktop','Edition', 3, 150,1,0,1),
    new State('Remote Access',       'Desktop','Edition', 3, 150,0,1,1),

    new State('Remote Access',    'Web Mobile','Edition', 3, 210,0,0,0),
    new State('Remote Access',    'Web Mobile','Edition', 3, 210,1,0,0),
    new State('Remote Access',    'Web Mobile','Edition', 3, 210,0,1,0),
    new State('Remote Access',    'Web Mobile','Edition', 3, 210,0,0,1),
    new State('Remote Access',    'Web Mobile','Edition', 3, 210,1,0,1),
    new State('Remote Access',    'Web Mobile','Edition', 3, 210,0,1,1),

    new State('Remote Access',    'Enterprise','Edition', 3, 240,0,0,0),
    new State('Remote Access',    'Enterprise','Edition', 3, 240,1,0,0),
    new State('Remote Access',    'Enterprise','Edition', 3, 240,0,1,0),
    new State('Remote Access',    'Enterprise','Edition', 3, 240,0,0,1),
    new State('Remote Access',    'Enterprise','Edition', 3, 240,1,0,1),
    new State('Remote Access',    'Enterprise','Edition', 3, 240,0,1,1),

    new State('Remote Access',       'Desktop','Edition', 5, 225,0,0,0),
    new State('Remote Access',       'Desktop','Edition', 5, 225,1,0,0),
    new State('Remote Access',       'Desktop','Edition', 5, 225,0,1,0),
    new State('Remote Access',       'Desktop','Edition', 5, 225,0,0,1),
    new State('Remote Access',       'Desktop','Edition', 5, 225,1,0,1),
    new State('Remote Access',       'Desktop','Edition', 5, 225,0,1,1),

    new State('Remote Access',    'Web Mobile','Edition', 5, 325,0,0,0),
    new State('Remote Access',    'Web Mobile','Edition', 5, 325,1,0,0),
    new State('Remote Access',    'Web Mobile','Edition', 5, 325,0,1,0),
    new State('Remote Access',    'Web Mobile','Edition', 5, 325,0,0,1),
    new State('Remote Access',    'Web Mobile','Edition', 5, 325,1,0,1),
    new State('Remote Access',    'Web Mobile','Edition', 5, 325,0,1,1),

    new State('Remote Access',    'Enterprise','Edition', 5, 350,0,0,0),
    new State('Remote Access',    'Enterprise','Edition', 5, 350,1,0,0),
    new State('Remote Access',    'Enterprise','Edition', 5, 350,0,1,0),
    new State('Remote Access',    'Enterprise','Edition', 5, 350,0,0,1),
    new State('Remote Access',    'Enterprise','Edition', 5, 350,1,0,1),
    new State('Remote Access',    'Enterprise','Edition', 5, 350,0,1,1),

    new State('Remote Access',       'Desktop','Edition',10, 420,0,0,0),
    new State('Remote Access',       'Desktop','Edition',10, 420,1,0,0),
    new State('Remote Access',       'Desktop','Edition',10, 420,0,1,0),
    new State('Remote Access',       'Desktop','Edition',10, 420,0,0,1),
    new State('Remote Access',       'Desktop','Edition',10, 420,1,0,1),
    new State('Remote Access',       'Desktop','Edition',10, 420,0,1,1),

    new State('Remote Access',    'Web Mobile','Edition',10, 590,0,0,0),
    new State('Remote Access',    'Web Mobile','Edition',10, 590,1,0,0),
    new State('Remote Access',    'Web Mobile','Edition',10, 590,0,1,0),
    new State('Remote Access',    'Web Mobile','Edition',10, 590,0,0,1),
    new State('Remote Access',    'Web Mobile','Edition',10, 590,1,0,1),
    new State('Remote Access',    'Web Mobile','Edition',10, 590,0,1,1),

    new State('Remote Access',    'Enterprise','Edition',10, 650,0,0,0),
    new State('Remote Access',    'Enterprise','Edition',10, 650,1,0,0),
    new State('Remote Access',    'Enterprise','Edition',10, 650,0,1,0),
    new State('Remote Access',    'Enterprise','Edition',10, 650,0,0,1),
    new State('Remote Access',    'Enterprise','Edition',10, 650,1,0,1),
    new State('Remote Access',    'Enterprise','Edition',10, 650,0,1,1),

    new State('Remote Access',       'Desktop','Edition',25, 800,0,0,0),
    new State('Remote Access',       'Desktop','Edition',25, 800,1,0,0),
    new State('Remote Access',       'Desktop','Edition',25, 800,0,1,0),
    new State('Remote Access',       'Desktop','Edition',25, 800,0,0,1),
    new State('Remote Access',       'Desktop','Edition',25, 800,1,0,1),
    new State('Remote Access',       'Desktop','Edition',25, 800,0,1,1),

    new State('Remote Access',    'Web Mobile','Edition',25,1125,0,0,0),
    new State('Remote Access',    'Web Mobile','Edition',25,1125,1,0,0),
    new State('Remote Access',    'Web Mobile','Edition',25,1125,0,1,0),
    new State('Remote Access',    'Web Mobile','Edition',25,1125,0,0,1),
    new State('Remote Access',    'Web Mobile','Edition',25,1125,1,0,1),
    new State('Remote Access',    'Web Mobile','Edition',25,1125,0,1,1),

    new State('Remote Access',    'Enterprise','Edition',25,1300,0,0,0),
    new State('Remote Access',    'Enterprise','Edition',25,1300,1,0,0),
    new State('Remote Access',    'Enterprise','Edition',25,1300,0,1,0),
    new State('Remote Access',    'Enterprise','Edition',25,1300,0,0,1),
    new State('Remote Access',    'Enterprise','Edition',25,1300,1,0,1),
    new State('Remote Access',    'Enterprise','Edition',25,1300,0,1,1),

    new State('Remote Access',       'Desktop','Edition',50,1250,0,0,0),
    new State('Remote Access',       'Desktop','Edition',50,1250,1,0,0),
    new State('Remote Access',       'Desktop','Edition',50,1250,0,1,0),
    new State('Remote Access',       'Desktop','Edition',50,1250,0,0,1),
    new State('Remote Access',       'Desktop','Edition',50,1250,1,0,1),
    new State('Remote Access',       'Desktop','Edition',50,1250,0,1,1),

    new State('Remote Access',    'Web Mobile','Edition',50,1750,0,0,0),
    new State('Remote Access',    'Web Mobile','Edition',50,1750,1,0,0),
    new State('Remote Access',    'Web Mobile','Edition',50,1750,0,1,0),
    new State('Remote Access',    'Web Mobile','Edition',50,1750,0,0,1),
    new State('Remote Access',    'Web Mobile','Edition',50,1750,1,0,1),
    new State('Remote Access',    'Web Mobile','Edition',50,1750,0,1,1),

    new State('Remote Access',    'Enterprise','Edition',50,2000,0,0,0),
    new State('Remote Access',    'Enterprise','Edition',50,2000,1,0,0),
    new State('Remote Access',    'Enterprise','Edition',50,2000,0,1,0),
    new State('Remote Access',    'Enterprise','Edition',50,2000,0,0,1),
    new State('Remote Access',    'Enterprise','Edition',50,2000,1,0,1),
    new State('Remote Access',    'Enterprise','Edition',50,2000,0,1,1),

    new State('Remote Access',       'Desktop', 'Bundle', 3, 210,0,0,0),
    new State('Remote Access',    'Web Mobile', 'Bundle', 3, 390,0,0,0),
    new State('Remote Access',    'Enterprise', 'Bundle', 3, 450,0,0,0),

    new State('Remote Access',       'Desktop', 'Bundle', 5, 300,0,0,0),
    new State('Remote Access',    'Web Mobile', 'Bundle', 5, 500,0,0,0),
    new State('Remote Access',    'Enterprise', 'Bundle', 5, 600,0,0,0),

    new State('Remote Access',       'Desktop', 'Bundle',10, 550,0,0,0),
    new State('Remote Access',    'Web Mobile', 'Bundle',10, 800,0,0,0),
    new State('Remote Access',    'Enterprise', 'Bundle',10,1000,0,0,0),

    new State('Remote Access',       'Desktop', 'Bundle',25, 900,0,0,0),
    new State('Remote Access',    'Web Mobile', 'Bundle',25,1400,0,0,0),
    new State('Remote Access',    'Enterprise', 'Bundle',25,1750,0,0,0),

    new State('Remote Access',       'Desktop', 'Bundle',50,1350,0,0,0),
    new State('Remote Access',    'Web Mobile', 'Bundle',50,2000,0,0,0),
    new State('Remote Access',    'Enterprise', 'Bundle',50,2500,0,0,0),

    new State('Remote Support',             '','Edition', 1,  50,0,0,0),
    new State('Remote Support',             '','Edition', 5, 250,0,0,0),
    new State('Remote Support',             '','Edition',10, 500,0,0,0),
    new State('Remote Support',             '','Edition',15, 750,0,0,0),
    new State('Remote Support',             '','Edition',20,1000,0,0,0),
    new State('Remote Support',             '','Edition',25,1250,0,0,0),

    new State('Advanced Security','Essentials','Edition', 1,  50,0,0,0),
    new State('Advanced Security',  'Ultimate','Edition', 1, 250,0,0,0),

    new State('Remote Work',                '','Edition', 1, 25,0,0,0),
    new State('Remote Work',                '','Edition', 1, 25,1,0,0),
    new State('Remote Work',                '','Edition', 1, 25,0,1,0),
    new State('Remote Work',                '','Edition', 1, 25,0,0,1),
    new State('Remote Work',                '','Edition', 1, 25,1,0,1),
    new State('Remote Work',                '','Edition', 1, 25,0,1,1),

    new State('Server Monitoring','Essentials','Edition', 1,  90,0,0,0),
    new State('Server Monitoring',   'Startup','Edition', 5, 350,0,0,0),
    new State('Server Monitoring',  'Business','Edition',10, 650,0,0,0),

]



//initialize local storage, depending on first visit or not

sessionStorage.setItem('product', undefined);
sessionStorage.setItem('plan', undefined);
sessionStorage.setItem('number', 1);
sessionStorage.setItem('updateSupport', 1);

sessionStorage.setItem('essentialsAddonRA', 0);
sessionStorage.setItem('ultimateAddonRA', 0);
sessionStorage.setItem('twoFAAddonRA', 0);

sessionStorage.setItem('essentialsAddonRW', 0);
sessionStorage.setItem('ultimateAddonRW', 0);
sessionStorage.setItem('twoFAAddonRW', 0);

//if(sessionStorage.getItem('users') !== null && checkRAPage == -4 && ( sessionStorage.getItem('type') == 'Bundle' || sessionStorage.getItem('type') == 'Edition' )){ updatePricesRA(true);}

//else{

    sessionStorage.setItem('type', undefined);
    sessionStorage.setItem('users', 3);

//}


if(sessionStorage.getItem('agents') !== null && checkRSPage >= 0){ updatePricesRS(true);}

else{

    sessionStorage.setItem('agents', 25);}




///////////////////////     FUNCTIONS     ///////////////////////

function updatePricesRA(already) {

    //init correct values if previous selection already made (for Chrome without incognito mode mostly)

    if(already == true){
        
        if     (sessionStorage.getItem('type') == 'Bundle' ){yB.checked = true; nB.checked = false;}
        else if(sessionStorage.getItem('type') == 'Edition'){yB.checked = false; nB.checked = true;}
        
        if     (sessionStorage.getItem('users') == '3'  ){u3.checked = true ; u5.checked = false; u10.checked = false; u25.checked = false; u50.checked = false;}
        else if(sessionStorage.getItem('users') == '5'  ){u3.checked = false; u5.checked = true ; u10.checked = false; u25.checked = false; u50.checked = false;}
        else if(sessionStorage.getItem('users') == '10' ){u3.checked = false; u5.checked = false; u10.checked = true ; u25.checked = false; u50.checked = false;}
        else if(sessionStorage.getItem('users') == '25' ){u3.checked = false; u5.checked = false; u10.checked = false; u25.checked = true ; u50.checked = false;}
        else if(sessionStorage.getItem('users') == '50' ){u3.checked = false; u5.checked = false; u10.checked = false; u25.checked = false; u50.checked = true ;}}
    


    // READ CHECKBOX INPUTS

    if      (u3.checked ){ var selectedUsers = 3; }
    else if (u5.checked ){ var selectedUsers = 5; }
    else if (u10.checked){ var selectedUsers = 10; }
    else if (u25.checked){ var selectedUsers = 25; }
    else if (u50.checked){ var selectedUsers = 50; }

    if      (yB.checked){ var selectedType = 'Bundle'; }
    else if (nB.checked){ var selectedType = 'Edition'; }

    
    for (var n=0; n<5; n++){
        dataFsc[n].setAttribute('data-fsc-item-path-value', fastspringRaBundleDesktopBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-item-path', fastspringRaBundleDesktopBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-addthis', fastspringRaBundleDesktopBase + selectedUsers);}

    for (var n=5; n<10; n++){
        dataFsc[n].setAttribute('data-fsc-item-path-value', fastspringRaEditionDesktopBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-item-path', fastspringRaEditionDesktopBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-addthis', fastspringRaEditionDesktopBase + selectedUsers);}

    for (var n=10; n<15; n++){
        dataFsc[n].setAttribute('data-fsc-item-path-value', fastspringRaBundleWebBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-item-path', fastspringRaBundleWebBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-addthis', fastspringRaBundleWebBase + selectedUsers);}

    for (var n=15; n<20; n++){
        dataFsc[n].setAttribute('data-fsc-item-path-value', fastspringRaEditionWebBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-item-path', fastspringRaEditionWebBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-addthis', fastspringRaEditionWebBase + selectedUsers);}

    for (var n=20; n<25; n++){
        dataFsc[n].setAttribute('data-fsc-item-path-value', fastspringRaBundleEnterpriseBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-item-path', fastspringRaBundleEnterpriseBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-addthis', fastspringRaBundleEnterpriseBase + selectedUsers);}

    for (var n=25; n<30; n++){
        dataFsc[n].setAttribute('data-fsc-item-path-value', fastspringRaEditionEnterpriseBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-item-path', fastspringRaEditionEnterpriseBase + selectedUsers);
        dataFsc[n].setAttribute('data-fsc-addthis', fastspringRaEditionEnterpriseBase + selectedUsers);}


    var stopLoop = false;
    var stopFirstLoop = false;


    for (var i=0; i<states.length; i++) {

 
        if( stopFirstLoop == false && states[i].product == 'Remote Access' && states[i].type == 'Edition' && selectedUsers == states[i].forUnit){

            compareDesktopBundleTheory.textContent =    states[i].comparePrice('Desktop');
            compareWebBundleTheory.textContent =        states[i+6].comparePrice('Web');
            compareEnterpriseBundleTheory.textContent = states[i+12].comparePrice('Enterprise');

            var stopFirstLoop = true;

        }

        if(states[i].product == 'Remote Access' && selectedType == states[i].type && selectedUsers == states[i].forUnit){

            //PER USER PRICES
            textDesktopPlan.textContent =    states[i].price('perUnit');
            textWebPlan.textContent =        states[i+6].price('perUnit');
            textEnterprisePlan.textContent = states[i+12].price('perUnit');

            textDesktopBundle.textContent =    states[i].price('perUnit');
            textWebBundle.textContent =        states[i+1].price('perUnit');
            textEnterpriseBundle.textContent = states[i+2].price('perUnit');

            //TOTAL PRICES
            compareDesktopPlan.textContent =    states[i].price();
            compareWebPlan.textContent =        states[i+6].price();
            compareEnterprisePlan.textContent = states[i+12].price();

            compareDesktopBundle.textContent =    states[i].price();
            compareWebBundle.textContent =        states[i+1].price();
            compareEnterpriseBundle.textContent = states[i+2].price();

            sessionStorage.setItem('users', states[i].forUnit);

            if(selectedUsers == 3){

                usersPopMessagePlanWith.style.display = "none";
                usersPopMessagePlanWithout.style.display = "block";}

            else {

                usersPopMessagePlanWith.style.display = "block";
                usersPopMessagePlanWithout.style.display = "none";}



            if(selectedUsers == 50){

                for(var a=0; a<tooltipUsersUpdate.length; a++){tooltipUsersUpdate[a].innerHTML = "For 50 users,<br>but you can have more users.";}}
    
            else {
    
                for(var a=0; a<tooltipUsersUpdate.length; a++){tooltipUsersUpdate[a].textContent = "For " + selectedUsers + " users.";}}



            if(selectedType == 'Bundle'){

                for(var j=0; j<toShowBundle.length; j++){toShowBundle[j].style.display = "block";}
                for(var k=0; k<toHideBundle.length; k++){toHideBundle[k].style.display = "none";}
                for(var l=0; l<hidePlus.length; l++){hidePlus[l].style.display = "inline";}
                for(var m=0; m<switchIncluded.length; m++){switchIncluded[m].classList.remove('ts-not-included-list-before'); switchIncluded[m].classList.add('ts-included-list-before');}

                document.getElementById('update-tooltip-switch-web').textContent        = 'The Web Mobile Edition PLUS includes all features from the Desktop Edition PLUS, the Web Portal, the HTML5 client and the 2FA. All you need to web enable your Windows systems.' ;
                document.getElementById('update-tooltip-switch-enterprise').textContent = 'The Enterprise Edition PLUS includes all features from the Web Mobile Edition PLUS, the Farm Manager, the TSplus Gateway and Advanced Security Ultimate.';

                bundlePopMessagePlanWith.style.display = "none";
                bundlePopMessagePlanWithout.style.display = "block";}
    
            else {

                for(var j=0; j<toShowBundle.length; j++){toShowBundle[j].style.display = "none";}
                for(var k=0; k<toHideBundle.length; k++){toHideBundle[k].style.display = "block";}
                for(var l=0; l<hidePlus.length; l++){hidePlus[l].style.display = "none";}
                for(var m=0; m<switchIncluded.length; m++){switchIncluded[m].classList.remove('ts-included-list-before'); switchIncluded[m].classList.add('ts-not-included-list-before');}

                document.getElementById('update-tooltip-switch-web').textContent        = 'The Web Mobile Edition includes all features from the Desktop Edition, the Web Portal and the HTML5 client. All you need to web enable your Windows systems.' ;
                document.getElementById('update-tooltip-switch-enterprise').textContent = 'The Enterprise Edition includes all features from the Web Mobile Edition, the Farm Manager and the TSplus Gateway.';
    
                bundlePopMessagePlanWith.style.display = "block";
                bundlePopMessagePlanWithout.style.display = "none";}

            stopLoop = true;

        }

        if(stopLoop == true){break;}

    }

}

/* 
function updatePricesRS(already) {

    if(already == true){
        
        if     (sessionStorage.getItem('agents') == '1'  ){rs1.checked = true  ; rs5.checked = false; rs10.checked = false; rs15.checked = false; rs20.checked = false; rs25.checked = false;}
        else if(sessionStorage.getItem('agents') == '5'  ){rs1.checked = false ; rs5.checked = true ; rs10.checked = false; rs15.checked = false; rs20.checked = false; rs25.checked = false;}
        else if(sessionStorage.getItem('agents') == '10' ){rs1.checked = false ; rs5.checked = false; rs10.checked = true ; rs15.checked = false; rs20.checked = false; rs25.checked = false;}
        else if(sessionStorage.getItem('agents') == '15' ){rs1.checked = false ; rs5.checked = false; rs10.checked = false; rs15.checked = true ; rs20.checked = false; rs25.checked = false;}
        else if(sessionStorage.getItem('agents') == '20' ){rs1.checked = false ; rs5.checked = false; rs10.checked = false; rs15.checked = false; rs20.checked = true ; rs25.checked = false;}
        else if(sessionStorage.getItem('agents') == '25' ){rs1.checked = false ; rs5.checked = false; rs10.checked = false; rs15.checked = false; rs20.checked = false; rs25.checked = true;}}

    if     (rs1.checked ){sessionStorage.setItem('agents',1 ); var selectedAgents = 1; }
    else if(rs5.checked ){sessionStorage.setItem('agents',5 ); var selectedAgents = 5; }
    else if(rs10.checked){sessionStorage.setItem('agents',10); var selectedAgents = 10; }
    else if(rs15.checked){sessionStorage.setItem('agents',15); var selectedAgents = 15; }
    else if(rs20.checked){sessionStorage.setItem('agents',20); var selectedAgents = 20; }
    else if(rs25.checked){sessionStorage.setItem('agents',25); var selectedAgents = 25; }

    for (var n=0; n<2; n++){
        dataFsc[n].setAttribute('data-fsc-item-path-value', fastspringRsBase + selectedAgents);
        dataFsc[n].setAttribute('data-fsc-item-path', fastspringRsBase + selectedAgents);
        dataFsc[n].setAttribute('data-fsc-addthis', fastspringRsBase + selectedAgents);}

}
*/

function updateUS(){

    usState = document.querySelector('input[name=us-choice]:checked').value;

    if(usState == 0){

        usPopMessagePlanWith.style.display = "none";
        usPopMessagePlanWithout.style.display = "block";}

    else {

        usPopMessagePlanWith.style.display = "block";
        usPopMessagePlanWithout.style.display = "none";}
    
}