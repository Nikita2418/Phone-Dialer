var i = 0;
        var value = [];
        var phone = "";
        function addNumber1() {
            if (i < 10) {
                phone = phone + document.getElementById("Number1").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "1";
            }
        }
        function addNumber2() {
            if (i < 10) {
                phone = phone + document.getElementById("Number2").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "2";
            }
        }

        function addNumber3() {
            if (i < 10) {
                phone = phone + document.getElementById("Number3").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "3";
            }
        }
        function addNumber4() {
            if (i < 10) {
                phone = phone + document.getElementById("Number4").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "4";
            }
        }
        function addNumber5() {
            if (i < 10) {
                phone = phone + document.getElementById("Number5").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "5";
            }
        }

        function addNumber6() {
            if (i < 10) {
                phone = phone + document.getElementById("Number6").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "6";
            }
        }

        function addNumber7() {
            if (i < 10) {
                phone = phone + document.getElementById("Number7").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "7";
            }
        }
        function addNumber8() {
            if (i < 10) {
                phone = phone + document.getElementById("Number8").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "8";
            }
        }

        function addNumber9() {
            if (i < 10) {
                phone = phone + document.getElementById("Number9").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "9";

            }
        }
        function addNumber0() {
            if (i < 10) {
                phone = phone + document.getElementById("Number0").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "0";

            }
        }
        function addStar() {
            if (i < 10) {
                phone = phone + document.getElementById("Star").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "*";

            }
        }
        function addHash() {
            if (i < 10) {
                phone = phone + document.getElementById("Hashtag").value;
                i = i + 1;
                document.getElementById("phoneNum").value += "#";

            }
        }
        
        function clearAll() {
            document.getElementById("phoneNum").value = "";
            return false;
        }

        function verifyNumbers() {

            document.getElementById("phoneNum").value = phone;

            if (phone == 10) {
                alert("Thanks for your input!");
            }
            else {
                alert("Please enter a valid number");
               
            }
        }
