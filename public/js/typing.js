/**
 * Typing Effect
 * Creates a typing/deleting animation for the hero section
 */

class TypingEffect {
    constructor(elementId, strings, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
        this.container = document.getElementById(elementId);
        this.strings = strings;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.pauseTime = pauseTime;
        this.stringIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.animationId = null;
        this.textSpan = null;
        this.caret = null;

        this.init();
    }

    init() {
        // Create separate elements for text and caret
        this.textSpan = document.createElement('span');
        this.textSpan.className = 'typed-content';
        this.caret = document.createElement('span');
        this.caret.className = 'typed-caret';
        
        this.container.appendChild(this.textSpan);
        this.container.appendChild(this.caret);
        
        this.type();
    }

    type() {
        const currentString = this.strings[this.stringIndex];
        const currentChar = this.isDeleting 
            ? currentString.substring(0, this.charIndex - 1)
            : currentString.substring(0, this.charIndex + 1);

        // Only update the text span, not the caret
        this.textSpan.textContent = currentChar;
        this.charIndex = this.isDeleting ? this.charIndex - 1 : this.charIndex + 1;

        let timeout = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.charIndex === currentString.length) {
            timeout = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.stringIndex = (this.stringIndex + 1) % this.strings.length;
            timeout = 500;
        }

        this.animationId = setTimeout(() => this.type(), timeout);
    }

    destroy() {
        if (this.animationId) {
            clearTimeout(this.animationId);
        }
    }
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.getElementById('typedText');
    if (typedElement) {
        new TypingEffect('typedText', [
            'Desarrollador Web',
            'Programador Java',
            'Artista 3D',
            'Minecraft Modder',
            'Full Stack Developer'
        ], 100, 50, 2000);
    }
});
