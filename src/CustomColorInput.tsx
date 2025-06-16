import React from 'react';
import { FormControl, TextField, Box } from '@mui/material';

const CustomColorInput = ({ value, onChange, placeholder, name, ...props }) => {
    const [focused, setFocused] = React.useState(false);

    const handleColorChange = (event) => {
        if (onChange) {
            // Create a synthetic event that mimics the text input onChange
            const syntheticEvent = {
                target: {
                    name: name,
                    value: event.target.value,
                },
            };
            onChange(syntheticEvent);
        }
    };

    return (
        <FormControl fullWidth>
            <Box
                sx={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '720px',
                    '&:focus-within': {
                        outline: '2px solid #0066cc',
                        outlineOffset: 0,
                        borderRadius: '8px',
                    },
                }}
            >
                <TextField
                    value={value}
                    onChange={onChange}
                    name={name}
                    placeholder={placeholder}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    variant="outlined"
                    sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                            padding: '8px 0px 8px 16px',
                            color: '#cacacc',
                            borderRadius: '8px',
                            borderColor: '#cacacc',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px',
                            height: '40px',
                            paddingRight: '48px',
                            border: '1px solid #ccc',
                            background: 'white',
                            cursor: 'text',
                            outline: 'none',
                            position: 'relative',
                            '&:focus': {
                                borderColor: 'transparent',
                            },
                            '& input': {
                                padding: '8px 0px 8px 0px !important',
                                paddingRight: '48px !important',
                                color: '#727273',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                height: '24px',
                            },
                            '& input::placeholder': {
                                color: '#cacacc',
                                opacity: 1,
                            },
                            '& fieldset': {
                                border: 'none',
                            },
                            '&:hover fieldset': {
                                border: 'none',
                            },
                            '&.Mui-focused fieldset': {
                                border: 'none',
                            },
                        },
                    }}
                    {...props}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        right: '1px',
                        top: '1px',
                        width: '48px',
                        height: 'calc(100% - 2px)',
                        backgroundColor: focused ? '#d6daee' : '#f1f0fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        zIndex: 1,
                    }}
                >
                    <Box
                        component="input"
                        type="color"
                        value={value || '#000000'}
                        onChange={handleColorChange}
                        sx={{
                            border: '1px solid #ADA6ED',
                            padding: '0px',
                            width: '24px',
                            height: '24px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                            '&::-webkit-color-swatch-wrapper': {
                                padding: 0,
                            },
                            '&::-webkit-color-swatch': {
                                border: 'none',
                                borderRadius: '4px',
                            },
                            '&::-moz-color-swatch': {
                                border: 'none',
                                borderRadius: '4px',
                            },
                        }}
                    />
                </Box>
            </Box>
        </FormControl>
    );
};

export default CustomColorInput;
