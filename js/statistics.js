var myYearAreaChart;
$(document).ready(function(){

    myYearAreaChart = c3.generate({
        bindto: '#myYearAreaChart',
        data: {
            columns: [
                ['documents', 300, 350, 300, 200, 220, 240, 100, 120, 115, 200, 280, 100],
                ['images', 130, 100, 140, 200, 150, 50, 300, 350, 300, 140, 200, 180],
                ['notes', 280, 100, 120, 60, 70, 80,  240, 100, 150, 50, 100, 120],
                ['music', 290, 200, 240, 100, 150, 50, 130, 100, 140, 200, 150, 50],
                ['phones', 330, 300, 240, 200, 250, 50,100, 140, 200, 150, 50, 300]
            ],
            types: {
                documents: 'area',
                images: 'area',
                notes: 'area',
                music: 'area',
                phones: 'area'
            }
        }
    });

});