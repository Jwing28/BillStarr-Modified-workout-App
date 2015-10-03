//waits for entire page to load (images,css,scripts,etc.)
window.onload = function() {

	function generateSets(day,mfExercise,wExercise,mSet,wSet,fSet,callback) {


		//origin values already setup. Loop through day array
			//for each day have 2 loops. one before 







            //__________________________________________________________________________________________________________________	
            //Rest of sets (first-second to last)
            //nested loop. outer: wk (1-12) inner: set (4-3-2-1)
            for (var oneTwelve = 1; oneTwelve < 13; oneTwelve++) {
                for (var fourOne = 4; fourOne > 0; fourOne--) {
                    document.getElementById("M" + oneTwelve + "S" +
                        fourOne).innerHTML = Math.ceil(
                        MonSetMultiplier * document.getElementById(
                            "M" + oneTwelve + "S" + (fourOne + 1)).innerHTML
                    );
                    document.getElementById("M" + oneTwelve + "B" +
                        fourOne).innerHTML = Math.ceil(
                        MonSetMultiplier * document.getElementById(
                            "M" + oneTwelve + "B" + (fourOne + 1)).innerHTML
                    );
                    document.getElementById("M" + oneTwelve + "R" +
                        fourOne).innerHTML = Math.ceil(
                        MonSetMultiplier * document.getElementById(
                            "M" + oneTwelve + "R" + (fourOne + 1)).innerHTML
                    );
                    //Wed & Fri - set4. 
                    document.getElementById("W" + oneTwelve + "S" +
                        fourOne).innerHTML = document.getElementById(
                        "M" + oneTwelve + "S" + fourOne).innerHTML;
                    document.getElementById("F" + oneTwelve + "S" +
                        fourOne).innerHTML = document.getElementById(
                        "M" + oneTwelve + "S" + fourOne).innerHTML;
                    document.getElementById("F" + oneTwelve + "B" +
                        fourOne).innerHTML = document.getElementById(
                        "M" + oneTwelve + "B" + fourOne).innerHTML;
                    document.getElementById("F" + oneTwelve + "R" +
                        fourOne).innerHTML = document.getElementById(
                        "M" + oneTwelve + "R" + fourOne).innerHTML;
                    //5th sets -Friday
                    document.getElementById("F" + oneTwelve + "S" + (
                        fourOne + 1)).innerHTML = Math.ceil((
                        document.getElementById("M" + oneTwelve +
                            "S" + (fourOne + 1)).innerHTML *
                        afterFour));
                    document.getElementById("F" + oneTwelve + "B" + (
                        fourOne + 1)).innerHTML = Math.ceil((
                        document.getElementById("M" + oneTwelve +
                            "B" + (fourOne + 1)).innerHTML *
                        afterFour));
                    document.getElementById("F" + oneTwelve + "R" + (
                        fourOne + 1)).innerHTML = Math.ceil((
                        document.getElementById("M" + oneTwelve +
                            "R" + (fourOne + 1)).innerHTML *
                        afterFour));
                    if (fourOne < 4) {
                        //Wed
                        document.getElementById("W" + oneTwelve + "I" +
                            fourOne).innerHTML = Math.ceil(
                            WedSetMultiplier * document.getElementById(
                                "W" + oneTwelve + "I" + (fourOne +
                                    1)).innerHTML);
                        document.getElementById("W" + oneTwelve + "D" +
                            fourOne).innerHTML = Math.ceil(
                            WedSetMultiplier * document.getElementById(
                                "W" + oneTwelve + "D" + (fourOne +
                                    1)).innerHTML);
                        //Fridays-working
                        document.getElementById("F" + oneTwelve + "S" +
                            fourOne).innerHTML = Math.ceil(
                            WedSetMultiplier * document.getElementById(
                                "M" + oneTwelve + "S" + (fourOne +
                                    1)).innerHTML);
                        document.getElementById("F" + oneTwelve + "B" +
                            fourOne).innerHTML = Math.ceil(
                            WedSetMultiplier * document.getElementById(
                                "M" + oneTwelve + "B" + (fourOne +
                                    1)).innerHTML);
                        document.getElementById("F" + oneTwelve + "R" +
                            fourOne).innerHTML = Math.ceil(
                            WedSetMultiplier * document.getElementById(
                                "M" + oneTwelve + "R" + (fourOne +
                                    1)).innerHTML);
                    }
                }
            }
            //seting up last rep of set 6 - try to incorporate later into function or loops above
            for (var lastSetWeek = 1; lastSetWeek < 13; lastSetWeek++) {
                document.getElementById("F" + lastSetWeek + "S6").innerHTML =
                    document.getElementById("M" + lastSetWeek + "S3").innerHTML;
                document.getElementById("F" + lastSetWeek + "B6").innerHTML =
                    document.getElementById("M" + lastSetWeek + "B3").innerHTML;
                document.getElementById("F" + lastSetWeek + "R6").innerHTML =
                    document.getElementById("M" + lastSetWeek + "R3").innerHTML;
            }
        });

		callback();
	}

    document.getElementById("demobutton").addEventListener("click",
        function() {

            var MonSetMultiplier = 0.875;
            var WedSetMultiplier = 0.833;
            var FriSetMultiplier = 1.10;
            var beforeFour = 0.975;
            var afterFour = 1.025;

            var day = ["M","W","F"];
            var mfExercise = ["S","B","R"];
            var wExercise = ["S","I","D"];
            //sets 1-less than actual because last set is hard-coded
            var mSet = [1,2,3,4];
            var wSet = [1,2,3];
            var fSet = [1,2,3,4,5];

            //check if user values entered are negative, or any non-number
            if (document.getElementById("squatMax").value < 0 || document.getElementById("benchMax").value < 0 || document.getElementById("rowMax").value < 0 || document.getElementById("inclineMax").value < 0 || document.getElementById("dlMax").value < 0 ){
            	alert("Please don't enter any negative values. Thank you!");
            }
            if (isNaN(document.getElementById("squatMax").value) || isNaN(document.getElementById("benchMax").value) || isNaN(document.getElementById("rowMax").value) || isNaN(document.getElementById("inclineMax").value) || isNaN(document.getElementById("dlMax").value) ){
            	alert("Please enter numbers only. Thank you!");
            }

            //"Origin" of WT calculations. Last set, wk 4 of each exercise.
            document.getElementById("M4S5").innerHTML = document.getElementById(
                "squatMax").value;
            document.getElementById("M4B5").innerHTML = document.getElementById(
                "benchMax").value;
            document.getElementById("M4R5").innerHTML = document.getElementById(
                "rowMax").value;
            document.getElementById("W4I4").innerHTML = document.getElementById(
                "inclineMax").value;
            document.getElementById("W4D4").innerHTML = document.getElementById(
                "dlMax").value;

            //Populate last set of every week for each exercise. ____________________________________________________________
            for (var oneThree = 3; oneThree > 0; oneThree--) { //Monday (wks 1-3)
                document.getElementById("M" + oneThree + "S5").innerHTML =
                    Math.ceil(beforeFour * document.getElementById("M" +
                        (oneThree + 1) + "S5").innerHTML);
                document.getElementById("M" + oneThree + "B5").innerHTML =
                    Math.ceil(beforeFour * document.getElementById("M" +
                        (oneThree + 1) + "B5").innerHTML);
                document.getElementById("M" + oneThree + "R5").innerHTML =
                    Math.ceil(beforeFour * document.getElementById("M" +
                        (oneThree + 1) + "R5").innerHTML);
                //WED
                document.getElementById("W" + oneThree + "I4").innerHTML =
                    Math.ceil(beforeFour * document.getElementById("W" +
                        (oneThree + 1) + "I4").innerHTML);
                document.getElementById("W" + oneThree + "D4").innerHTML =
                    Math.ceil(beforeFour * document.getElementById("W" +
                        (oneThree + 1) + "D4").innerHTML);
            }
            //(wks 5-12)
            for (var fiveTwelve = 5; fiveTwelve < 13; fiveTwelve++) {
                document.getElementById("M" + fiveTwelve + "S5").innerHTML =
                    Math.ceil(afterFour * document.getElementById("M" +
                        (fiveTwelve - 1) + "S5").innerHTML);
                document.getElementById("M" + fiveTwelve + "B5").innerHTML =
                    Math.ceil(afterFour * document.getElementById("M" +
                        (fiveTwelve - 1) + "B5").innerHTML);
                document.getElementById("M" + fiveTwelve + "R5").innerHTML =
                    Math.ceil(afterFour * document.getElementById("M" +
                        (fiveTwelve - 1) + "R5").innerHTML);
                //Wed
                document.getElementById("W" + fiveTwelve + "I4").innerHTML =
                    Math.ceil(afterFour * document.getElementById("W" +
                        (fiveTwelve - 1) + "I4").innerHTML);
                document.getElementById("W" + fiveTwelve + "D4").innerHTML =
                    Math.ceil(afterFour * document.getElementById("W" +
                        (fiveTwelve - 1) + "D4").innerHTML);
            }

            //call generateSets and pass all information-"view"? so values will be generated
            generateSets(day,mfExercise,wExercise,mSet,wSet,fSet,function () {
            	//this callback function is designed to store your projected max if you're curious how far this program can take you after 12 weeks.
            	//3 rep max * 1.06 ~ 1 rep max
            	


            });

};