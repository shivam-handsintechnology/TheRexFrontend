import React, { useEffect, useRef, useState } from 'react';

const RichTextEditor = ({ value = '', onChange }) => {
    const [showingSourceCode, setShowingSourceCode] = useState(false);
    const [isInEditMode, setIsInEditMode] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const iframeRef = useRef(null);

    // Initialize iframe content when component mounts or value changes
    useEffect(() => {
        if (iframeRef.current) {
            const iframe = iframeRef.current;
            iframe.contentDocument.designMode = 'On';

            // Set initial content
            if (value && iframe.contentDocument.body) {
                iframe.contentDocument.body.innerHTML = value;
            }

            // Add event listener for content changes
            const handleInput = () => {
                if (onChange && iframe.contentDocument.body) {
                    onChange(iframe.contentDocument.body.innerHTML);
                }
            };

            iframe.contentDocument.addEventListener('input', handleInput);

            return () => {
                iframe.contentDocument.removeEventListener('input', handleInput);
            };
        }
    }, [value, onChange]);

    const execCmd = (command) => {
        if (iframeRef.current) {
            iframeRef.current.contentDocument.execCommand(command, false, null);
            // Trigger onChange after command execution
            triggerOnChange();
        }
    };

    const execCommandWithArg = (command, arg) => {
        if (iframeRef.current) {
            iframeRef.current.contentDocument.execCommand(command, false, arg);
            // Trigger onChange after command execution
            triggerOnChange();
        }
    };

    const triggerOnChange = () => {
        if (iframeRef.current && onChange) {
            onChange(iframeRef.current.contentDocument.body.innerHTML);
        }
    };

    const toggleSource = () => {
        if (iframeRef.current) {
            const body = iframeRef.current.contentDocument.getElementsByTagName('body')[0];
            if (showingSourceCode) {
                body.innerHTML = body.textContent;
            } else {
                body.textContent = body.innerHTML;
            }
            setShowingSourceCode(!showingSourceCode);
            triggerOnChange();
        }
    };

    const toggleEdit = () => {
        if (iframeRef.current) {
            iframeRef.current.contentDocument.designMode = isInEditMode ? 'Off' : 'On';
            setIsInEditMode(!isInEditMode);
        }
    };

    const toggleDarkLight = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`rich-text-editor ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="toolbar">
                <button type='button' className="raise" onClick={toggleDarkLight}>
                    <i className="fas fa-adjust"></i>
                </button>
                <button type='button' className="raise" title="Bold" onClick={() => execCmd('bold')}>
                    <i className="fas fa-bold"></i>
                </button>
                <button type='button' className="raise" onClick={() => execCmd('italic')}>
                    <i className="fas fa-italic"></i>
                </button>
                <button type='button' className="raise" onClick={() => execCmd('underline')}>
                    <i className="fas fa-underline"></i>
                </button>
                <button type='button' className="raise" onClick={() => execCmd('removeFormat')}>
                    <i className="fas fa-remove-format"></i>
                </button>
                <button type='button' className="raise" onClick={() => execCmd('strikeThrough')}>
                    <i className="fas fa-strikethrough"></i>
                </button>
                <button type='button' className="raise" onClick={() => execCmd('justifyLeft')}>
                    <i className="fas fa-align-left"></i>
                </button>
                <button type='button' className="raise" onClick={() => execCmd('justifyCenter')}>
                    <i className="fas fa-align-center"></i>
                </button>
                <button type='button' className="raise" onClick={() => execCmd('justifyRight')}>
                    <i className="fas fa-align-right"></i>
                </button>
                <button type='button' className="raise" onClick={() => execCmd('justifyFull')}>
                    <i className="fas fa-align-justify"></i>
                </button>

                <select
                    className="raise"
                    onChange={(e) => execCommandWithArg('formatBlock', e.target.value)}
                >
                    <option value="H1">H1</option>
                    <option value="H2">H2</option>
                    <option value="H3">H3</option>
                    <option value="H4">H4</option>
                    <option value="H5">H5</option>
                    <option value="H6">H6</option>
                </select>

                <select
                    className="raise"
                    onChange={(e) => execCommandWithArg('fontName', e.target.value)}
                >
                    <option value="Arial">Arial</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                    <option value="Courier">Courier</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Tahoma">Tahoma</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>

                <select
                    className="raise"
                    onChange={(e) => execCommandWithArg('fontSize', e.target.value)}
                >
                    {[1, 2, 3, 4, 5, 6, 7].map(size => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>

                <label>
                    Fore Color:
                    <input
                        type="color"
                        onChange={(e) => execCommandWithArg('foreColor', e.target.value)}
                    />
                </label>

                <label>
                    Background:
                    <input
                        type="color"
                        onChange={(e) => execCommandWithArg('hiliteColor', e.target.value)}
                    />
                </label>

                <button type='button' className="raise" onClick={toggleSource}>
                    <i className="fas fa-code"></i>
                </button>

                <button type='button' className="raise" onClick={toggleEdit}>
                    Toggle Edit
                </button>

                <button type='button'
                    className="raise"
                    onClick={() => execCommandWithArg('insertImage', prompt('Enter the image URL', ''))}
                >
                    <i className="fas fa-file-image"></i>
                </button>
            </div>

            <iframe
                ref={iframeRef}
                className="editor-content"
                style={{ width: '1200px', height: '1000px' }}
            />
        </div>
    );
};

export default RichTextEditor;