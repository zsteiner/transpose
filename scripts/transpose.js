var originalNote,
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
    'F'
];

function noteTranslation() {
	--transposeNote;	
	transposeNoteLabel = noteTranslator[transposeNote];

	--originalNote;	
	originalNoteLabel = noteTranslator[originalNote];
}

function transpose() {
    originalInstrument = $('#instrument-list1').val();
    transposeInstrument = $('#instrument-list2').val();
    originalInstrumentLabel = $('#instrument-list1 option:selected').text();
    transposeInstrumentLabel = $('#instrument-list2 option:selected').text();

        originalNote = parseInt(originalNote, 10);
        originalInstrument = parseInt(originalInstrument, 10);
        transposeInstrument = parseInt(transposeInstrument, 10);
        
        transposeFactor = transposeInstrument - originalInstrument;        
    
        console.log(originalInstrumentLabel + ' -> ' + transposeInstrumentLabel + ', ' + 'transpose factor: ' + transposeFactor);
    
        if ((originalNote + transposeFactor) <= 0) {
            transposeNote = (originalNote + transposeFactor) + 12;
        }
    
        else if ((originalNote + transposeFactor) > 12) {
            transposeNote = (originalNote + transposeFactor) - 12;
        }
    
        else {
            transposeNote = originalNote + transposeFactor;
        }
        
        console.log('Original Note: ' + originalNote);
        console.log('Transposed Note: ' + transposeNote);
         
        noteTranslation();
    
        $('#item-' + (transposeNote + 1)).addClass('is-transposed').siblings().removeClass('is-transposed');
        
        if (transposeNote === originalNote) {
           $('.answer-same').removeClass('is-hidden').siblings().addClass('is-hidden');
        	$('.original-note').html(originalNoteLabel);
        	$('.transpose-note').html(transposeNoteLabel);
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
        console.log('Error');
        $('.error-message').removeClass('is-hidden');  
    }

    else {
        originalNote =  originalNote.substring(5);
        
        transpose();    
    }
}

$('#instrument-list1').change(function(){
    originalNote = $('.item.is-selected').attr('id');
    originalInstrument = $(this).val();

    errorChecker();    
});

$('#instrument-list2').change(function(){
    originalNote = $('.item.is-selected').attr('id');
    transposeInstrument = $(this).val();
    
    errorChecker();
});

$('#itemsContainer a').click(function(){
    originalNote = $(this).attr('id');
    originalNote =  originalNote.substring(5);
    
    $(this).addClass('is-selected').siblings().removeClass('is-selected');
    transpose();
});