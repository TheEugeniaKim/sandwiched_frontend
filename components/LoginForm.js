import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import t from 'tcomb-form-native'; 

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    password: t.String,
});