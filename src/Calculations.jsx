import { useState } from 'react';
import Question from './left/Question';

const useCaseCalculations = () => {
  // const [avgWorkTime,setAvgWorkTime] = useState(2)
  // const handleAvyWorkTime=(newVal) =>{
  //   setAvgWorkTime(newVal)
  // }

  // var avgWorkTime = 0;
  // var noOfPeople = 0;

  // avgWorkTime = parseInt(document.getElementById('param1').value);
  // console.log('avgWorkTime', avgWorkTime);
  // noOfPeople = parseInt(document.getElementById('param2').value);

  // if (avgWorkTime >= 1) {
  //   document.getElementById('errorLineText1').style.display = 'none';
  //   if (noOfPeople >= 17400) {
  //     document.getElementById('errorLineText2').style.display = 'none';
  //     var currentManHours = avgWorkTime * noOfPeople;

  //     var noOfPeopleComplexity = 0;

  //     if (noOfPeople == 1) {
  //       noOfPeopleComplexity = 1;
  //     } else if (noOfPeople >= 2 && noOfPeople <= 4) {
  //       noOfPeopleComplexity = 2;
  //     } else if (noOfPeople >= 5 && noOfPeople <= 8) {
  //       noOfPeopleComplexity = 3;
  //     } else if (noOfPeople >= 9) {
  //       noOfPeopleComplexity = 4;
  //     } else {
  //       noOfPeopleComplexity = 1;
  //     }

  //     var noOfSteps = parseInt(s1);
  //     var noOfStepsComplexity = 0;

  //     if (noOfSteps >= 1 && noOfSteps <= 20) {
  //       noOfStepsComplexity = 1;
  //     } else if (noOfSteps >= 21 && noOfSteps <= 40) {
  //       noOfStepsComplexity = 2;
  //     } else if (noOfSteps >= 41 && noOfSteps <= 60) {
  //       noOfStepsComplexity = 3;
  //     } else if (noOfSteps >= 61 && noOfSteps <= 80) {
  //       noOfStepsComplexity = 4;
  //     } else {
  //       noOfStepsComplexity = 1;
  //     }

  //     var noOfApplications = parseInt(s2);
  //     var noOfApplicationsComplexity = 0;

  //     if (noOfApplications >= 1 && noOfApplications <= 2) {
  //       noOfApplicationsComplexity = 1;
  //     } else if (noOfApplications >= 3 && noOfApplications <= 4) {
  //       noOfApplicationsComplexity = 2;
  //     } else if (noOfApplications >= 5 && noOfApplications <= 6) {
  //       noOfApplicationsComplexity = 3;
  //     } else if (noOfApplications >= 7 && noOfApplications <= 8) {
  //       noOfApplicationsComplexity = 4;
  //     } else {
  //       noOfApplicationsComplexity = 1;
  //     }

  //     var valueA = Math.max(noOfStepsComplexity, noOfApplicationsComplexity);

  //     var processComplexity = parseInt(s3);

  //     var cognitiveSkills = parseInt(b1);
  //     var documentRequired = parseInt(b2);
  //     var supportRequired = parseInt(b3);

  //     var functionalComplexity = 0;

  //     if (processComplexity == 1) {
  //       functionalComplexity = processComplexity + cognitiveSkills;
  //     } else {
  //       if (cognitiveSkills == 1) {
  //         functionalComplexity = 1.5 * processComplexity;
  //       } else {
  //         functionalComplexity = processComplexity;
  //       }
  //     }

  //     var isInputUnstructured = parseInt(b4);

  //     var dataTables = parseInt(c1);
  //     var ocr = parseInt(c2);
  //     var qrCode = parseInt(c3);
  //     var rulesBased = parseInt(c4);
  //     var barCode = parseInt(c5);

  //     var datatypeComplexity = 0;
  //     var datatypeComplexityFinal = 0;

  //     if (isInputUnstructured == 1) {
  //       document.getElementById('chk4').disabled = true;

  //       document.getElementById('chk3').disabled = false;
  //       document.getElementById('chk5').disabled = false;
  //       document.getElementById('chk6').disabled = false;
  //       document.getElementById('chk7').disabled = false;
  //       document.getElementById('chk8').disabled = false;

  //       if (dataTables == 1) {
  //         datatypeComplexity += 4;
  //       }
  //       if (qrCode == 1) {
  //         datatypeComplexity += 2;
  //       }
  //       if (barCode == 1) {
  //         datatypeComplexity += 2;
  //       }
  //     } else {
  //       document.getElementById('chk4').disabled = false;

  //       document.getElementById('chk3').disabled = true;
  //       document.getElementById('chk5').disabled = true;
  //       document.getElementById('chk6').disabled = true;
  //       document.getElementById('chk7').disabled = true;
  //       document.getElementById('chk8').disabled = true;

  //       if (dataTables == 1) {
  //         datatypeComplexity += 1;
  //       }
  //       if (rulesBased == 1) {
  //         datatypeComplexity += 1;
  //       }
  //     }
  //     if (ocr == 1) {
  //       datatypeComplexity += 3;
  //     }

  //     if (datatypeComplexity >= 1 && datatypeComplexity <= 2) {
  //       datatypeComplexityFinal = 1;
  //     } else if (datatypeComplexity >= 3 && datatypeComplexity <= 4) {
  //       datatypeComplexityFinal = 2;
  //     } else if (datatypeComplexity >= 5 && datatypeComplexity <= 7) {
  //       datatypeComplexityFinal = 3;
  //     } else if (datatypeComplexity >= 8) {
  //       datatypeComplexityFinal = 4;
  //     } else {
  //       datatypeComplexityFinal = 1;
  //     }

  //     var nlp = parseInt(c6);
  //     var complexAlgo = parseInt(c7);
  //     var graphs = parseInt(c8);
  //     var unstructuredComplexity = 0;

  //     if (nlp == 1 || complexAlgo == 1 || graphs == 1) {
  //       unstructuredComplexity = 4;
  //     }

  //     var overAllComplexity =
  //       20 * valueA +
  //       5 * noOfPeopleComplexity +
  //       25 * functionalComplexity +
  //       20 * datatypeComplexityFinal +
  //       15 * unstructuredComplexity;

  //     console.log('overAllComplexity:' + overAllComplexity);

  //     yearOption = document.getElementById('years').value;

  //     console.log('year: ' + yearOption);

  //     var optimisedHours = 0;
  //     var documentationHours = 0;
  //     var afterLiveSupportHours = 0;

  //     if (overAllComplexity >= 1 && overAllComplexity <= 70) {
  //       optimisedHours = 3000;
  //       if (documentRequired == 1) {
  //         documentationHours = 250;
  //       }
  //       if (supportRequired == 1) {
  //         afterLiveSupportHours = 300;
  //       }
  //     } else if (overAllComplexity >= 71 && overAllComplexity <= 99) {
  //       optimisedHours = 5000;
  //       if (documentRequired == 1) {
  //         documentationHours = 300;
  //       }
  //       if (supportRequired == 1) {
  //         afterLiveSupportHours = 500;
  //       }
  //     } else if (overAllComplexity >= 100 && overAllComplexity <= 225) {
  //       optimisedHours = 8000;
  //       if (documentRequired == 1) {
  //         documentationHours = 350;
  //       }
  //       if (supportRequired == 1) {
  //         afterLiveSupportHours = 800;
  //       }
  //     } else if (overAllComplexity >= 226) {
  //       optimisedHours = 10000;
  //       if (documentRequired == 1) {
  //         documentationHours = 400;
  //       }
  //       if (supportRequired == 1) {
  //         afterLiveSupportHours = 1000;
  //       }
  //     } else {
  //       optimisedHours = 100;
  //     }
  //     var licenseCost = 6000;
  //     var finalCurrentHours = (parseInt(yearOption) * currentManHours).toFixed(
  //       2
  //     );
  //     var finalOptimisedHours = (
  //       optimisedHours +
  //       documentationHours +
  //       parseInt(yearOption) * afterLiveSupportHours +
  //       parseInt(yearOption) * licenseCost
  //     ).toFixed(2);
  //     var reducedCost = (
  //       ((finalCurrentHours - finalOptimisedHours) / finalOptimisedHours) *
  //       100
  //     ).toFixed(2);

  //     document.getElementById('original-time').value = '$ ' + finalCurrentHours;
  //     document.getElementById('optimised-time').value =
  //       '$ ' + finalOptimisedHours;
  //     document.getElementById('reduced-hours').value = reducedCost + '%';
  //   } else {
  //     document.getElementById('errorLineText2').style.display = 'block';
  //   }
  // } else {
  //   document.getElementById('errorLineText1').style.display = 'block';
  // }
};
export default useCaseCalculations;
