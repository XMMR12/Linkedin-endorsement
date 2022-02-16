/*Works when you open someones profile in desktop view*/
/* can work from mobiles in desktop view*/
/* //Old version:
endors=document.getElementsByClassName("pv-skill-category-entity__endorse-action pv-skill-entity__endorse-actions ember-view");for(x=0;x<endors.length;x++){endors[x].children[0].click();}*/
/*Updated version:*/
endors=document.getElementsByClassName("ember-view");for(x=0;x<endors.length;x++){if (endors[x].innerText=="Endorse"){endors[x].click();}}
