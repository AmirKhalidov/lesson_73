import React from 'react';
import { FormControl, Select, MenuItem, Box } from '@mui/material';

const CustomSelectComponent = ({
    value,
    onChange,
    options,
    placeholder,
    name,
    ...props
}) => {
    const [focused, setFocused] = React.useState(false);

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
                <Select
                    value={value}
                    onChange={onChange}
                    name={name}
                    displayEmpty
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    sx={{
                        // padding: '8px 0px 8px 16px',
                        color: '#cacacc',
                        width: '100%',
                        borderRadius: '8px',
                        borderColor: '#cacacc',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        height: '40px',
                        // paddingRight: '48px',
                        border: '1px solid #ccc',
                        background: 'white',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        cursor: 'pointer',
                        outline: 'none',
                        position: 'relative',
                        '&:focus': {
                            borderColor: 'transparent',
                        },
                        '& .MuiSelect-select': {
                            padding: '8px 0px 8px 16px !important',
                            // paddingRight: '48px !important',
                            color: '#cacacc',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .MuiSelect-icon': {
                            display: 'none',
                        },
                    }}
                    {...props}
                >
                    <MenuItem
                        value=""
                        disabled
                        sx={{
                            color: '#cacacc',
                        }}
                    >
                        {placeholder}
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}
                            sx={{
                                color: '#727273',
                            }}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>

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
                        pointerEvents: 'none',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        zIndex: 1,
                    }}
                >
                    <Box
                        component="img"
                        src="src\assets\Vector.svg"
                        alt="dropdown arrow"
                        sx={{
                            width: '14px',
                            height: '7px',
                            objectFit: 'contain',
                        }}
                    />
                </Box>
            </Box>
        </FormControl>
    );
};

export default CustomSelectComponent;
