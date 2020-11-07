<html>
    <head>
        <script type="text/javascript">
        function time_scroll() 
        {
            var d = newDate();
            window.status = d.getHours()
                    + ':' + d.getMinutes()
                    + ':' + d.getSeconds()
            setTimeout('time_scroll()',1000);
        }
        </script>
    </head>
    <body onLoad="time_scroll()">
    </body>
</html>