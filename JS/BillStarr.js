//Triggered when dom is ready
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("demobutton").addEventListener("click",
        function() {
            //Multipliers used to build cells in table
            var MonSetMultiplier = 0.875;
            var WedSetMultiplier = 0.833;
            var FriSetMultiplier = 1.10;

            var beforeFour = 0.975;
            var afterFour = 1.025;            
            var projectedMax = 1.342;
            //created variables for ID's to shorten code below to increase readability
            var squatMax = document.getElementById("squatMax");
            var benchMax = document.getElementById("benchMax");
            var rowMax = document.getElementById("rowMax");
            var inclineMax = document.getElementById("inclineMax");
            var dlMax = document.getElementById("dlMax");
            
            var checkUserInput = [squatMax,benchMax,rowMax,inclineMax,dlMax];
            var errorCheck = false;

            //Check if values entered were negative or non-numbers. If so, user's input changed to error and cell in question highlighted red.
            for (var initialMax = 0; initialMax < checkUserInput.length; initialMax++) {
                if (checkUserInput[initialMax].value <= 0 || isNaN(checkUserInput[initialMax].value)){
                 checkUserInput[initialMax].style.backgroundColor = 'Red';
                 checkUserInput[initialMax].value = "#NAN!";
                 errorCheck = true;
                } else {
                    checkUserInput[initialMax].style.backgroundColor = '#333';//If user fixes input, color of textbox reverts back
                }
            } 
            //If error thrown by any user input, user alerted only values can be entered.
            if (errorCheck === true) {
                alert("Exercises highlighted in red must be fixed. Please enter numerical values greater than zero. Thank you.");   
            }

//------------**Method of calculations based on Bill Starr's 5x5 program, but slightly modified to fit my training preferences**-----------------
          
            //"Origin" of WT calculations. Last set, wk 4 of each exercise. 
            document.getElementById("M4S5").innerHTML = squatMax.value;
            document.getElementById("M4B5").innerHTML = benchMax.value;
            document.getElementById("M4R5").innerHTML = rowMax.value;
            document.getElementById("W4I4").innerHTML = inclineMax.value;
            document.getElementById("W4D4").innerHTML = dlMax.value;

            //Projected 1 rep maxes after user enters current inputs
            document.getElementById("FinalSquat").innerHTML = Math.ceil(projectedMax * squatMax.value);
            document.getElementById("FinalBench").innerHTML = Math.ceil(projectedMax * benchMax.value);
            document.getElementById("FinalRow").innerHTML = Math.ceil(projectedMax * rowMax.value);

            //Populate last set of every week for each exercise. (Weeks 1-3)
            for (var oneThree = 3; oneThree > 0; oneThree--) { 
                document.getElementById("M" + oneThree + "S5").innerHTML = Math.ceil(beforeFour * document.getElementById("M" + (oneThree + 1) + "S5").innerHTML);
                document.getElementById("M" + oneThree + "B5").innerHTML = Math.ceil(beforeFour * document.getElementById("M" + (oneThree + 1) + "B5").innerHTML);
                document.getElementById("M" + oneThree + "R5").innerHTML = Math.ceil(beforeFour * document.getElementById("M" + (oneThree + 1) + "R5").innerHTML);
                //WED
                document.getElementById("W" + oneThree + "I4").innerHTML = Math.ceil(beforeFour * document.getElementById("W" + (oneThree + 1) + "I4").innerHTML);
                document.getElementById("W" + oneThree + "D4").innerHTML = Math.ceil(beforeFour * document.getElementById("W" + (oneThree + 1) + "D4").innerHTML);
            }

            //Populate last set of every week for each exercise. (Weeks 5-12)
            for (var fiveTwelve = 5; fiveTwelve < 13; fiveTwelve++) {
                document.getElementById("M" + fiveTwelve + "S5").innerHTML = Math.ceil(afterFour * document.getElementById("M" +(fiveTwelve - 1) + "S5").innerHTML);
                document.getElementById("M" + fiveTwelve + "B5").innerHTML = Math.ceil(afterFour * document.getElementById("M" +(fiveTwelve - 1) + "B5").innerHTML);
                document.getElementById("M" + fiveTwelve + "R5").innerHTML = Math.ceil(afterFour * document.getElementById("M" +(fiveTwelve - 1) + "R5").innerHTML);
                //Wed
                document.getElementById("W" + fiveTwelve + "I4").innerHTML = Math.ceil(afterFour * document.getElementById("W" + (fiveTwelve - 1) + "I4").innerHTML);
                document.getElementById("W" + fiveTwelve + "D4").innerHTML = Math.ceil(afterFour * document.getElementById("W" + (fiveTwelve - 1) + "D4").innerHTML);
            }

            //Rest of sets (first to second to last)
            //nested loop. outer: weeks (1-12) inner: sets (4-3-2-1)
            for (var oneTwelve = 1; oneTwelve < 13; oneTwelve++) {
                for (var fourOne = 4; fourOne > 0; fourOne--) {
                    document.getElementById("M" + oneTwelve + "S" + fourOne).innerHTML = Math.ceil(MonSetMultiplier * document.getElementById("M" + oneTwelve + "S" + (fourOne + 1)).innerHTML);
                    document.getElementById("M" + oneTwelve + "B" + fourOne).innerHTML = Math.ceil(MonSetMultiplier * document.getElementById("M" + oneTwelve + "B" + (fourOne + 1)).innerHTML);
                    document.getElementById("M" + oneTwelve + "R" + fourOne).innerHTML = Math.ceil(MonSetMultiplier * document.getElementById("M" + oneTwelve + "R" + (fourOne + 1)).innerHTML);

                    //Wed & Fri - set 4. 
                    document.getElementById("W" + oneTwelve + "S" + fourOne).innerHTML = document.getElementById("M" + oneTwelve + "S" + fourOne).innerHTML;
                    document.getElementById("F" + oneTwelve + "S" + fourOne).innerHTML = document.getElementById("M" + oneTwelve + "S" + fourOne).innerHTML;
                    document.getElementById("F" + oneTwelve + "B" + fourOne).innerHTML = document.getElementById("M" + oneTwelve + "B" + fourOne).innerHTML;
                    document.getElementById("F" + oneTwelve + "R" + fourOne).innerHTML = document.getElementById("M" + oneTwelve + "R" + fourOne).innerHTML;

                    //5th sets -Friday
                    document.getElementById("F" + oneTwelve + "S" + (fourOne + 1)).innerHTML = Math.ceil((document.getElementById("M" + oneTwelve + "S" + (fourOne + 1)).innerHTML * afterFour));
                    document.getElementById("F" + oneTwelve + "B" + (fourOne + 1)).innerHTML = Math.ceil((document.getElementById("M" + oneTwelve + "B" + (fourOne + 1)).innerHTML * afterFour));
                    document.getElementById("F" + oneTwelve + "R" + (fourOne + 1)).innerHTML = Math.ceil((document.getElementById("M" + oneTwelve + "R" + (fourOne + 1)).innerHTML * afterFour));

                    //Sets up weeks 1-3 for Wed and Fri
                    if (fourOne < 4) {
                        //Wed
                        document.getElementById("W" + oneTwelve + "I" + fourOne).innerHTML = Math.ceil(WedSetMultiplier * document.getElementById("W" + oneTwelve + "I" + (fourOne + 1)).innerHTML);
                        document.getElementById("W" + oneTwelve + "D" + fourOne).innerHTML = Math.ceil(WedSetMultiplier * document.getElementById("W" + oneTwelve + "D" + (fourOne + 1)).innerHTML);
                        document.getElementById("F" + oneTwelve + "S" + fourOne).innerHTML = Math.ceil(WedSetMultiplier * document.getElementById("M" + oneTwelve + "S" + (fourOne + 1)).innerHTML);
                        document.getElementById("F" + oneTwelve + "B" + fourOne).innerHTML = Math.ceil(WedSetMultiplier * document.getElementById("M" + oneTwelve + "B" + (fourOne + 1)).innerHTML);
                        document.getElementById("F" + oneTwelve + "R" + fourOne).innerHTML = Math.ceil(WedSetMultiplier * document.getElementById("M" + oneTwelve + "R" + (fourOne + 1)).innerHTML);
                    }
                }
            }

            //seting up set six for Friday
            for (var lastSetWeek = 1; lastSetWeek < 13; lastSetWeek++) {
                document.getElementById("F" + lastSetWeek + "S6").innerHTML = document.getElementById("M" + lastSetWeek + "S3").innerHTML;
                document.getElementById("F" + lastSetWeek + "B6").innerHTML = document.getElementById("M" + lastSetWeek + "B3").innerHTML;
                document.getElementById("F" + lastSetWeek + "R6").innerHTML = document.getElementById("M" + lastSetWeek + "R3").innerHTML;
            }
        });
});