var instruments,
    instrumentScroll,
    originalNote,
    originalNoteLabel,
    originalInstrument,
    originalInstrumentLabel,
    transposeInstrument,
    transposeInstrumentLabel,
    transposeNote,
    transposeNoteLabel,
    transposeFactor;

var noteTranslator = ['C','G','D','A','E','B',
    'F<span class="sharp">&#X266F;</span> / G<span class="flat">&#X266D;</span>',
    'D<span class="flat">&#X266D;</span> / C<span class="sharp">&#X266F;</span>',
    'A<span class="flat">&#X266D;</span> / G<span class="sharp">&#X266F;</span>',
    'E<span class="flat">&#X266D;</span> / D<span class="sharp">&#X266F;</span>',
    'B<span class="flat">&#X266D;</span> / A<span class="sharp">&#X266F;</span>',
    'F'];

function mainScroll() {
	instrumentScroll = new IScroll('#scroll1', {
		scrollbars: false,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		click: true,
		fadeScrollbars: false,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL|A)$/ }
	});
}

function noteTranslation() {
	transposeNoteIndex = transposeNote - 1;	
	transposeNoteLabel = noteTranslator[transposeNoteIndex];

	originalNoteIndex = originalNote - 1;	
	originalNoteLabel = noteTranslator[originalNoteIndex];
}

function transpose() {
    transposeFactor = transposeInstrument - originalInstrument;        

    //console.log('Original Note: ' + originalNote);
    //console.log(originalInstrumentLabel + ' (' + originalInstrument  + ') -> ' + transposeInstrumentLabel + '(' + transposeInstrument + ') | ' + 'transpose factor: ' + transposeFactor);

    if ((originalNote + transposeFactor) <= 0) {
        transposeNote = (originalNote + transposeFactor) + 12;
    }

    else if ((originalNote + transposeFactor) > 12) {
        transposeNote = (originalNote + transposeFactor) - 12;
    }

    else {
        transposeNote = originalNote + transposeFactor;
    }
    
    //console.log('Transposed Note: ' + transposeNote);
     
    noteTranslation();

    $('#item-' + transposeNote).addClass('is-transposed').siblings().removeClass('is-transposed');
    
    if (transposeNote === originalNote) {
        $('#message-same').removeClass('is-hidden').siblings().addClass('is-hidden');
        $('.original-instrument').html(originalInstrumentLabel);
        $('.transpose-instrument').html(transposeInstrumentLabel);
    }
    
    else {
        $('#message-result').removeClass('is-hidden').siblings().addClass('is-hidden');
    	$('.original-instrument').html(originalInstrumentLabel);
    	$('.original-note').html(originalNoteLabel);
    	$('.transpose-note').html(transposeNoteLabel);
    	$('.transpose-instrument').html(transposeInstrumentLabel);
    }
}

function errorChecker() {
    if (transposeInstrument === undefined) {
        $('#message-error-transpose').removeClass('is-hidden').siblings().addClass('is-hidden');
    }

    else if (originalNote === undefined) {
        $('#message-error-note').removeClass('is-hidden').siblings().addClass('is-hidden');  
    }

    else {
        originalNote = $('#itemsContainer a.is-selected').attr('id');
        originalNote =  originalNote.substring(5);
        originalNote = parseInt(originalNote, 10);

        transpose();    
    }
}

function createInstruments(obj) {
    var icon;
    var sourceInstrumentList = document.getElementById('source-list');
    var transposeInstrumentList = document.getElementById('transpose-list');
    
    $.each(obj, function(i, sourceItem, transposeItem) {
        sourceItem = sourceInstrumentList.appendChild(document.createElement('li'));
        transposeItem = transposeInstrumentList.appendChild(document.createElement('li'));

        if (instruments[i].icon === true) {
            icon = '<svg class="icon instruments__icon"><use xlink:href="#icon-' + instruments[i].iconName + '"></use></svg>';    
        }
        
        else {
            icon = '<svg class="icon instruments__icon icon--note"><use xlink:href="#icon-' + instruments[i].key + '"></use></svg>';
        }

        if (instruments[i].default === true) {
            originalInstrument = instruments[i].transposeFactor;  
            originalInstrumentLabel = instruments[i].name;
            $('#instrument-source .tr-button__name').text(originalInstrumentLabel);
 
            if (instruments[i].icon === true) {
                $('#instrument-source .tr-button__icon use').attr('xlink:href', '#icon-' + instruments[i].iconName).parent().removeClass('icon--note');
            }
            
            else {
                $('#instrument-source .tr-button__icon use').attr('xlink:href', '#icon-' + instruments[i].iconName).parent().addClass('icon--note');
            }
        }
        
        sourceItem.innerHTML = 
    	    '<input type="radio" name="source-instrument" id="source-instrument' + i + '" value="' + instruments[i].transposeFactor + '">' + 
    	    '<label for="source-instrument' + i + '">' + icon + 
    	    '<span class="instruments__name">' + instruments[i].name + '</span></label>';

        transposeItem.innerHTML = 
    	    '<input type="radio" name="transpose-instrument" id="transpose-instrument' + i + '" value="' + instruments[i].transposeFactor + '" >' +
    	    '<label for="transpose-instrument' + i + '">' + icon + 
    	    '<span class="instruments__name">' + instruments[i].name + '</span></label>';
    	    
        $(sourceItem).find('label').on('click', function(event) {
            event.stopPropagation();

            selectedInstrument = $(this).attr('for');
            selectedInstrument = selectedInstrument.replace('source-instrument','');
            
            originalInstrument =  instruments[selectedInstrument].transposeFactor;
            originalInstrumentLabel = instruments[selectedInstrument].name;
            
            $('#instrument-source .tr-button__name').text(originalInstrumentLabel);

            if (instruments[i].icon === true) {
                $('#instrument-source .tr-button__icon use').attr('xlink:href', '#icon-' + instruments[selectedInstrument].iconName).parent().removeClass('icon--note');
            }
            
            else {
                $('#instrument-source .tr-button__icon use').attr('xlink:href', '#icon-' + instruments[selectedInstrument].iconName).parent().addClass('icon--note');
            }
            
            setTimeout(function(){
                $('.tr-instruments').addClass('is-hidden');    
            },200);
            
            $('#instrument-source').removeClass('is-selected tr-button--empty');
            
            errorChecker();
        });

        $(transposeItem).find('label').on('click', function(event) {
            event.stopPropagation();
            
            selectedInstrument = $(this).attr('for');
            selectedInstrument = selectedInstrument.replace('transpose-instrument','');

            transposeInstrument = instruments[selectedInstrument].transposeFactor;
            transposeInstrumentLabel = instruments[selectedInstrument].name;

            $('#instrument-transpose .tr-button__name').text(transposeInstrumentLabel);
            
            if (instruments[i].icon === true) {
                $('#instrument-transpose .tr-button__icon use').attr('xlink:href', '#icon-' + instruments[selectedInstrument].iconName).parent().removeClass('tr-button__icon--note');
            }
            
            else {
                $('#instrument-transpose .tr-button__icon use').attr('xlink:href', '#icon-' + instruments[selectedInstrument].iconName).parent().addClass('tr-button__icon--note');
            }
            
            setTimeout(function(){
                $('.tr-instruments').addClass('is-hidden');    
            },200);

            $('#instrument-transpose').removeClass('is-selected tr-button--empty');
            event.stopPropagation();
            errorChecker();
        });
    });   
    instrumentScroll.refresh();
}

mainScroll();

$.getJSON('scripts/instruments.js').done(function(data) {
    instruments = data;
    createInstruments(instruments);
});

$('#instrument-source, #instrument-transpose').click(function(event){
    event.stopPropagation();
    var value = $(this).data('value');

    $('.tr-button').removeClass('is-selected'); 
    $(this).addClass('is-selected');
    
    $('.tr-instruments').removeClass('is-hidden');
    $('#' + value + '-list').removeClass('is-hidden').siblings().addClass('is-hidden');
    
    instrumentScroll.refresh();
});

$('body').click(function(){
     $('<div class="tr-instruments"></div>  ').addClass('is-hidden');
     $('.tr-button').removeClass('is-selected');
});

$('#itemsContainer a').click(function(event){
    event.stopPropagation();

    originalNote = $(this).attr('id');
    originalNote =  originalNote.substring(5);
    originalNote = parseInt(originalNote, 10);

    $(this).addClass('is-selected').siblings().removeClass('is-selected');
    errorChecker();
});