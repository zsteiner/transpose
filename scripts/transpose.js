var instruments,
    instrumentScroll,
    originalNote,
    originalNoteLabel,
    originalInstrument = 0,
    originalInstrumentLabel = "piano",
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
        $('.answer-same').removeClass('is-hidden').siblings().addClass('is-hidden');
        $('.original-instrument').html(originalInstrumentLabel);
        $('.transpose-instrument').html(transposeInstrumentLabel);
    }
    
    else {
        $('.answer').removeClass('is-hidden').siblings().addClass('is-hidden');
    	$('.original-instrument').html(originalInstrumentLabel);
    	$('.original-note').html(originalNoteLabel);
    	$('.transpose-note').html(transposeNoteLabel);
    	$('.transpose-instrument').html(transposeInstrumentLabel);
    }
}

function errorChecker() {
    if (originalNote === undefined) {
        $('.error-message').removeClass('is-hidden').siblings().addClass('is-hidden');  
    }
    
    else if (transposeInstrument === undefined) {
        $('.error-message-transpose').removeClass('is-hidden').siblings().addClass('is-hidden');
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
            icon = '<svg class="icon"><use xlink:href="#icon-' + instruments[i].iconName + '"></use></svg>';    
        }
        
        else {
            icon = '<svg class="icon icon-note"><use xlink:href="#icon-' + instruments[i].key + '"></use></svg>';
        }
        sourceItem.innerHTML = 
    	    '<input type="radio" name="source-instrument" id="source-instrument' + i + '" value="' + instruments[i].transposeFactor + '">' + 
    	    '<label for="source-instrument' + i + '">' + icon + 
    	    '<span class="instrument-name">' + instruments[i].name + '</span></label>';

        transposeItem.innerHTML = 
    	    '<input type="radio" name="transpose-instrument" id="transpose-instrument' + i + '" value="' + instruments[i].transposeFactor + '" >' +
    	    '<label for="transpose-instrument' + i + '">' + icon + 
    	    '<span class="instrument-name">' + instruments[i].name + '</span></label>';
    	    
        $(sourceItem).find('label').on('click', function(event) {
            event.stopPropagation();

            selectedInstrument = $(this).attr('for');
            selectedInstrument = selectedInstrument.replace('source-instrument','');
            
            originalInstrument =  instruments[selectedInstrument].transposeFactor;
            originalInstrumentLabel = instruments[selectedInstrument].name;
            
            $('.instrument-source .instrument-name').text(originalInstrumentLabel);

            if (instruments[i].icon === true) {
                $('.instrument-source use').attr('xlink:href', '#icon-' + instruments[selectedInstrument].iconName).parent().removeClass('icon-note');
            }
            
            else {
                $('.instrument-source use').attr('xlink:href', '#icon-' + instruments[selectedInstrument].iconName).parent().addClass('icon-note');
            }
            
            setTimeout(function(){
                $('.instrument-selector').addClass('is-hidden');    
            },200);
            
            $('.instrument-source .button').removeClass('is-selected button-empty');
            
            errorChecker();
        });

        $(transposeItem).find('label').on('click', function(event) {
            event.stopPropagation();
            
            selectedInstrument = $(this).attr('for');
            selectedInstrument = selectedInstrument.replace('transpose-instrument','');

            transposeInstrument = instruments[selectedInstrument].transposeFactor;
            transposeInstrumentLabel = instruments[selectedInstrument].name;

            $('.instrument-transpose .instrument-name').text(transposeInstrumentLabel);
            
            if (instruments[i].icon === true) {
                $('.instrument-transpose use').attr('xlink:href', '#icon-' + instruments[selectedInstrument].iconName).parent().removeClass('icon-note');
            }
            
            else {
                $('.instrument-transpose use').attr('xlink:href', '#icon-' + instruments[selectedInstrument].iconName).parent().addClass('icon-note');
            }
            
            setTimeout(function(){
                $('.instrument-selector').addClass('is-hidden');    
            },200);

            $('.instrument-transpose .button').removeClass('is-selected button-empty');
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

$('.instrument .button').click(function(event){
    event.stopPropagation();
    var value = $(this).data('value');

    $('.instrument .button').removeClass('is-selected'); 
    $(this).addClass('is-selected');
    
    $('.instrument-selector').removeClass('is-hidden');
    $('#' + value + '-list').removeClass('is-hidden').siblings().addClass('is-hidden');
    
    instrumentScroll.refresh();
});

$('body').click(function(){
     $('.instrument-selector').addClass('is-hidden');
     $('.button').removeClass('is-selected');
});

$('#itemsContainer a').click(function(event){
    event.stopPropagation();

    originalNote = $(this).attr('id');
    originalNote =  originalNote.substring(5);
    originalNote = parseInt(originalNote, 10);

    $(this).addClass('is-selected').siblings().removeClass('is-selected');
    errorChecker();
});