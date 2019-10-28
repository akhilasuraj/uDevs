
        $(window).on('load',function(){
            $('#exampleModalCenter').modal('show');
        });

        $(document).ready(function(){
            $(".show-modal").click(function(){
                $("#exampleModalCenter1").modal({
                    backdrop: 'static',
                    keyboard: false
                });
            });
        });
