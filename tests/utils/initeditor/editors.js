/* bender-tags: editor,unit,utils */

'use strict';

bender.editors = {
	framed: {
		name: 'framed'
	},
	inline: {
		name: 'inline',
		creator: 'inline'
	}
};

bender.test( {
	'test': function() {
		assert.areSame( 2, CKEDITOR.tools.objectKeys( this.editors ).length, 'this.editors' );
		assert.areSame( 2, CKEDITOR.tools.objectKeys( this.editorsBots ).length, 'this.editorsBots' );
		assert.areSame( 2, CKEDITOR.tools.objectKeys( bender.editors ).length, 'bender.editors' );
		assert.areSame( 'framed', bender.editors.framed.name );
		assert.areSame( 'inline', bender.editors.inline.name );
	}
} );