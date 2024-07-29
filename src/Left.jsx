import React, { useEffect, useState } from 'react';
import Question from './left/Question';
import './App.css';
import Scrollbar from './left/Scrollbar';
import { light } from '@mui/material/styles/createPalette';
import YesNo from './left/YesNo';
import Checkbox from './left/Checkbox';
const Left = ({ sentFinalValues }) => {
  const ques1 = {
    text: 'Currently how many full-time employees are involved in the process?',
    defVal: 2,
  };

  const ques2 = {
    text: 'Average salary of an employee per year (US Dollars)?',
    defVal: 30000,
  };

  const steps = {
    label: 'How many steps does the process include?',
    list: [
      {
        value: 1,
        label: '1',
      },
      {
        value: 10,
        label: '10',
      },
      {
        value: 20,
        label: '20',
      },
      {
        value: 30,
        label: '30',
      },
      {
        value: 40,
        label: '40',
      },
      {
        value: 50,
        label: '50',
      },
      {
        value: 60,
        label: '60',
      },
      {
        value: 70,
        label: '70',
      },
      {
        value: 80,
        label: '80',
      },
    ],
    max: 80,
    name: 'slider1',
  };
  const applications = {
    label: 'How many applications are involved in the process?',
    list: [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
      {
        value: 4,
        label: '4',
      },
      {
        value: 5,
        label: '5',
      },
      {
        value: 6,
        label: '6',
      },
      {
        value: 7,
        label: '7',
      },
      {
        value: 8,
        label: '8',
      },
    ],
    max: 8,
    name: 'slider2',
  };
  const complexity = {
    label: 'How complex is the process?',
    list: [
      {
        value: 1,
        label: 'Simple',
      },
      {
        value: 2,
        label: 'Average',
      },
      {
        value: 3,
        label: 'Intermediate',
      },
      {
        value: 4,
        label: 'Complex',
      },
    ],
    max: 4,
    name: 'slider3',
  };

  const yesNoQuestions = [
    { text: 'Does this process require cognitive skills?', type: 'cognitive' },
    { text: 'Is the process documentation required?', type: 'documentation' },
    { text: 'Is RPA support required post Go-Live?', type: 'golive' },
    { text: 'Is the input data unstructured?', type: 'unstructured' },
  ];

  const parameters = [
    'Data tables',
    'OCR',
    'QR Codes',
    'Rule-based Processing',
    'Bar Codes',
    'NLP',
    'Complex Algorithm',
    'Graphs',
  ];

  // first two questions
  const [avgWorkTime, setAvgWorkTime] = useState(2);
  const [noOfPeople, setNoOfPeople] = useState(30000);

  const handleValueChange = (newVal) => {
    if (newVal <= 100) {
      setAvgWorkTime(newVal);
      // console.log('left input avg work time', newVal);
    } else if (newVal >= 17400) {
      setNoOfPeople(newVal);
      // console.log('left input no of employee', newVal);
    }
  };

  // the three sliders
  const [slider1, setSlider1] = useState(1);
  const [slider2, setSlider2] = useState(1);
  const [slider3, setSlider3] = useState(1);

  const onValueChange = (e) => {
    // console.log('slider', e.target.name, '', e.target.value);
    if (e.target.name === 'slider1') setSlider1(e.target.value);
    else if (e.target.name === 'slider2') setSlider2(e.target.value);
    else if (e.target.name === 'slider3') setSlider3(e.target.value);
  };

  // four yes no toggle
  const [yesNoBtn1, setYesNoBtn1] = useState(1);
  const [yesNoBtn2, setYesNoBtn2] = useState(1);
  const [yesNoBtn3, setYesNoBtn3] = useState(1);
  const [yesNoBtn4, setYesNoBtn4] = useState(1);

  const buttonSuccess = (param) => {
    if (param.type === 'cognitive') setYesNoBtn1(1);
    else if (param.type === 'documentation') setYesNoBtn2(1);
    else if (param.type === 'golive') setYesNoBtn3(1);
    else if (param.type === 'unstructured') setYesNoBtn4(1);
  };
  const buttonFail = (param) => {
    if (param.type === 'cognitive') setYesNoBtn1(0);
    else if (param.type === 'documentation') setYesNoBtn2(0);
    else if (param.type === 'golive') setYesNoBtn3(0);
    else if (param.type === 'unstructured') setYesNoBtn4(0);
  };

  // eight parameters checkbox
  const [check1, setCheck1] = useState(0);
  const [check2, setCheck2] = useState(0);
  const [check3, setCheck3] = useState(0);
  const [check4, setCheck4] = useState(0);
  const [check5, setCheck5] = useState(0);
  const [check6, setCheck6] = useState(0);
  const [check7, setCheck7] = useState(0);
  const [check8, setCheck8] = useState(0);

  const onCheckClick = (param, val) => {
    // console.log('check', param, 'value', val);
    if (param === 'Data tables') setCheck1(val);
    else if (param === 'OCR') setCheck2(val);
    else if (param === 'QR Codes') setCheck3(val);
    else if (param === 'Rule-based Processing') setCheck4(val);
    else if (param === 'Bar Codes') setCheck5(val);
    else if (param === 'NLP') setCheck6(val);
    else if (param === 'Complex Algorithm') setCheck7(val);
    else if (param === 'Graphs') setCheck8(val);
  };

  const yearOption = 1;

  // final calculations
  const [finalCurrentHours, setfinalCurrentHours] = useState();
  const [finalOptimisedHours, setfinalOptimisedHours] = useState();
  const [reducedCost, setreducedCost] = useState();

  const finalValues = {
    finalCurrentHours: finalCurrentHours,
    finalOptimisedHours: finalOptimisedHours,
    reducedCost: reducedCost,
  };

  useEffect(() => {
    var currentManHours = avgWorkTime * noOfPeople;
    // console.log('current man hours', currentManHours);

    var noOfPeopleComplexity = 0;
    if (noOfPeople == 1) {
      noOfPeopleComplexity = 1;
    } else if (noOfPeople >= 2 && noOfPeople <= 4) {
      noOfPeopleComplexity = 2;
    } else if (noOfPeople >= 5 && noOfPeople <= 8) {
      noOfPeopleComplexity = 3;
    } else if (noOfPeople >= 9) {
      noOfPeopleComplexity = 4;
    } else {
      noOfPeopleComplexity = 1;
    }
    // console.log('no. of people complexity', noOfPeopleComplexity);

    var noOfSteps = slider1;
    var noOfStepsComplexity = 0;
    if (noOfSteps >= 1 && noOfSteps <= 20) {
      noOfStepsComplexity = 1;
    } else if (noOfSteps >= 21 && noOfSteps <= 40) {
      noOfStepsComplexity = 2;
    } else if (noOfSteps >= 41 && noOfSteps <= 60) {
      noOfStepsComplexity = 3;
    } else if (noOfSteps >= 61 && noOfSteps <= 80) {
      noOfStepsComplexity = 4;
    } else {
      noOfStepsComplexity = 1;
    }
    // console.log('no. of steps complexity', noOfStepsComplexity);

    var noOfApplications = slider2;
    var noOfApplicationsComplexity = 0;

    if (noOfApplications >= 1 && noOfApplications <= 2) {
      noOfApplicationsComplexity = 1;
    } else if (noOfApplications >= 3 && noOfApplications <= 4) {
      noOfApplicationsComplexity = 2;
    } else if (noOfApplications >= 5 && noOfApplications <= 6) {
      noOfApplicationsComplexity = 3;
    } else if (noOfApplications >= 7 && noOfApplications <= 8) {
      noOfApplicationsComplexity = 4;
    } else {
      noOfApplicationsComplexity = 1;
    }
    var valueA = Math.max(noOfStepsComplexity, noOfApplicationsComplexity);
    var processComplexity = slider3;
    // console.log('valueA', valueA);

    var cognitiveSkills = yesNoBtn1;
    var documentRequired = yesNoBtn2;
    var supportRequired = yesNoBtn3;
    var isInputUnstructured = yesNoBtn4;

    var functionalComplexity = 0;

    if (processComplexity == 1) {
      functionalComplexity = processComplexity + cognitiveSkills;
    } else {
      if (cognitiveSkills == 1) {
        functionalComplexity = 1.5 * processComplexity;
      } else {
        functionalComplexity = processComplexity;
      }
    }

    var dataTables = check1;
    var ocr = check2;
    var qrCode = check3;
    var rulesBased = check4;
    var barCode = check5;

    var datatypeComplexity = 0;
    var datatypeComplexityFinal = 0;

    if (isInputUnstructured == 1) {
      if (dataTables == 1) {
        datatypeComplexity += 4;
      }
      if (qrCode == 1) {
        datatypeComplexity += 2;
      }
      if (barCode == 1) {
        datatypeComplexity += 2;
      }
    } else {
      if (dataTables == 1) {
        datatypeComplexity += 1;
      }
      if (rulesBased == 1) {
        datatypeComplexity += 1;
      }
    }

    if (ocr == 1) {
      datatypeComplexity += 3;
    }

    if (datatypeComplexity >= 1 && datatypeComplexity <= 2) {
      datatypeComplexityFinal = 1;
    } else if (datatypeComplexity >= 3 && datatypeComplexity <= 4) {
      datatypeComplexityFinal = 2;
    } else if (datatypeComplexity >= 5 && datatypeComplexity <= 7) {
      datatypeComplexityFinal = 3;
    } else if (datatypeComplexity >= 8) {
      datatypeComplexityFinal = 4;
    } else {
      datatypeComplexityFinal = 1;
    }

    var nlp = check6;
    var complexAlgo = check7;
    var graphs = check8;
    var unstructuredComplexity = 0;

    if (nlp == 1 || complexAlgo == 1 || graphs == 1) {
      unstructuredComplexity = 4;
    }

    var overAllComplexity =
      20 * valueA +
      5 * noOfPeopleComplexity +
      25 * functionalComplexity +
      20 * datatypeComplexityFinal +
      15 * unstructuredComplexity;

    // console.log('overAllComplexity:' + overAllComplexity);

    // yearOption = document.getElementById("years").value
    // console.log("year: "+ yearOption)

    var optimisedHours = 0;
    var documentationHours = 0;
    var afterLiveSupportHours = 0;

    if (overAllComplexity >= 1 && overAllComplexity <= 70) {
      optimisedHours = 3000;
      if (documentRequired == 1) {
        documentationHours = 250;
      }
      if (supportRequired == 1) {
        afterLiveSupportHours = 300;
      }
    } else if (overAllComplexity >= 71 && overAllComplexity <= 99) {
      optimisedHours = 5000;
      if (documentRequired == 1) {
        documentationHours = 300;
      }
      if (supportRequired == 1) {
        afterLiveSupportHours = 500;
      }
    } else if (overAllComplexity >= 100 && overAllComplexity <= 225) {
      optimisedHours = 8000;
      if (documentRequired == 1) {
        documentationHours = 350;
      }
      if (supportRequired == 1) {
        afterLiveSupportHours = 800;
      }
    } else if (overAllComplexity >= 226) {
      optimisedHours = 10000;
      if (documentRequired == 1) {
        documentationHours = 400;
      }
      if (supportRequired == 1) {
        afterLiveSupportHours = 1000;
      }
    } else {
      optimisedHours = 100;
    }
    var licenseCost = 6000;
    setfinalCurrentHours((parseInt(yearOption) * currentManHours).toFixed(2));
    setfinalOptimisedHours(
      (
        optimisedHours +
        documentationHours +
        parseInt(yearOption) * afterLiveSupportHours +
        parseInt(yearOption) * licenseCost
      ).toFixed(2)
    );
    setreducedCost(
      (
        ((finalCurrentHours - finalOptimisedHours) / finalOptimisedHours) *
        100
      ).toFixed(2)
    );

    console.log('finalCurrentHourse', finalCurrentHours);
    console.log('finalOptimisedHours', finalOptimisedHours);
    console.log('reducedCost', reducedCost);

    sentFinalValues(finalValues);
  }, [
    avgWorkTime,
    noOfPeople,
    slider1,
    slider2,
    slider3,
    yesNoBtn1,
    yesNoBtn2,
    yesNoBtn3,
    check1,
    check2,
    check3,
    check4,
    check5,
    check6,
    check7,
    check8,
  ]);

  return (
    <section className="left">
      {/* // questions section */}
      <div className="question spacing">
        <Question
          ques={ques1.text}
          defVal={ques1.defVal}
          onValueChange={handleValueChange}
        />
      </div>
      <div className="question">
        <Question
          ques={ques2.text}
          defVal={ques2.defVal}
          onValueChange={handleValueChange}
        />
      </div>
      {/* scrollbar section */}
      <Scrollbar
        label={steps.label}
        list={steps.list}
        max={steps.max}
        onValueChange={onValueChange}
        name={steps.name}
      />
      <Scrollbar
        label={applications.label}
        list={applications.list}
        max={applications.max}
        onValueChange={onValueChange}
        name={applications.name}
      />
      <Scrollbar
        label={complexity.label}
        list={complexity.list}
        max={complexity.max}
        onValueChange={onValueChange}
        name={complexity.name}
      />
      {/* yes no questionaire */}
      {yesNoQuestions.map((e) => (
        <YesNo
          text={e.text}
          type={e.type}
          // onValueChange={onYesNoChange}
          buttonSuccess={buttonSuccess}
          buttonFail={buttonFail}
        />
      ))}
      {/* checkbox parameters */}
      <p className="question-btn question-chk" for="">
        What all parameters does the process include?
      </p>
      {parameters.map((e) => {
        if (yesNoBtn4 == 0)
          if (e === 'Rule-based Processing')
            return (
              <Checkbox text={e} onCheck={onCheckClick} isDisable={false} />
            );
          else
            return (
              <Checkbox text={e} onCheck={onCheckClick} isDisable={true} />
            );
        else if (e === 'Rule-based Processing')
          return <Checkbox text={e} onCheck={onCheckClick} isDisable={true} />;
        else
          return <Checkbox text={e} onCheck={onCheckClick} isDisable={false} />;
      })}
    </section>
  );
};
export default Left;
