const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        function strip(bandName) {
            return bandName.replace(/^(a |the |an )/i, '').trim();
        }

        var sortedBands = bands.sort(function(a, b) {
            if (strip(a) > strip(b)) {
                return 1;
            } else {
                return -1;
            }
        });
        // console.log(sortedBands);

        document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join(''); // .join turns it into one big string










        // const bands = ['The Plot in You', 'Pierce the Veil', 'A Skylit Drive', 'An Old Dog'];
        // var ordered = [];
        // var length = bands.length;
        // var namesCounter = 0;
        // var alpha = [];

        // function splitAndOrder() {
        //     while ((namesCounter + 1) < length) {
        //         var internalCounter = 0;
        //         var sliced = bands[namesCounter].split(' ');
        //         // console.log(sliced);
        //         // console.log(sliced[internalCounter + 1]);
        //         if (sliced[0] == 'The' || sliced[0] == 'A' || sliced[0] == 'An') {
        //             ordered.push(sliced[1]);
        //             // console.log(sliced[1]);
        //         } else {
        //             ordered.push(sliced[0]);
        //             // console.log(sliced[0]);
        //         }
        //         namesCounter = namesCounter + 1;
        //         ordered = ordered.sort();
        //         // console.log(ordered);
        //     }
        // }
        // var counter = 0
        // var arrLeng = splitAndOrder.length;
        // while ((counter + 1) < arrLeng) {
        //     var i = 0
        //     var sliced = bands[counter].split(' ');
        //     if (sliced[counter].includes(splitAndOrder()[i])) {
        //         console.log(sliced[counter]);
        //         alpha.push(sliced[counter]);
        //         i = i + 1;
        //     } else {
        //         counter = counter + 1;
        //         console.log(counter);
        //     }
        // }
        // console.log(alpha);
        // console.log(bands.length)