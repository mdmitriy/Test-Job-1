$(document).ready(function () {

    // add task

    $("#add").click(function () {
        var tbody = document.getElementById("table").getElementsByTagName("tbody")[0];
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var tdlast = $("tr").last().children().first().text();
        if (tdlast == "№") {
            td1.appendChild(document.createTextNode(1));
        } else {
            td1.appendChild(document.createTextNode(+tdlast + 1));
        }
        var td2 = document.createElement("td");
        var textTask = $("#input").val();
        td2.appendChild(document.createTextNode(textTask));
        var td3 = document.createElement("td");
        td3.appendChild(document.createTextNode("x"));
        td3.className = "close";
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        tbody.appendChild(row);

        // delete added task 

        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var tr = this.parentElement;
                tr.remove();
            }
        }
    });

    // delete task

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var tr = this.parentElement;
            tr.remove();
        }
    }

    // sorting

    function sortTable(f, n) {
        var rows = $('#table tbody  tr').get();

        rows.sort(function (a, b) {

            var A = getVal(a);

            var B = getVal(b);

            if (A < B) {
                return -1 * f;
            }
            if (A > B) {
                return 1 * f;
            }
            return 0;
        });

        function getVal(elm) {
            var v = $(elm).children('td').eq(n).text().toUpperCase();
            if ($.isNumeric(v)) {
                v = parseInt(v, 10);
            }
            return v;
        }

        $.each(rows, function (index, row) {
            $('#table').children('tbody').append(row);
        });
    }
    var f_sl = 1;
    var f_nm = 1;
    $("#sl").click(function () {
        // f_sl *= -1; 
        var n = $(this).prevAll().length;
        sortTable(f_sl, n);
    });
    $("#nm").click(function () {
        // f_nm *= -1; 
        var n = $(this).prevAll().length;
        sortTable(f_nm, n);
    });

    // console

    $('#add, .close, #sl, #nm').click(function () {
        var matrix = [];
        $('tbody tr').each(function () {
            var values = [];
            $(this).find("td").each(function () {
                values.push($(this).text());
            });
            matrix.push(values);


        });
        console.log(matrix);
    });


});