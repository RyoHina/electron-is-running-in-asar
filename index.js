/*
 * The MIT License
 *
 * Copyright (c) 2016 Balena.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';
import fs from "fs";
import path from 'path'
import {app} from 'electron'

module.exports = function() {
	// It's wrong sometimes.
	// return process.mainModule.filename.indexOf('app.asar') !== -1;
	
	try {
            const test_file = path.join(app.getAppPath(), Date.now() + ".temp.txt")
            // if in asar package, this line will throw exception
            fs.writeFileSync(test_file, "")
            if (fs.existsSync(test_file)) {
                fs.unlinkSync(test_file)
            }
            return false
        } catch (e) {
            if (e.errno === -2 && e.message.includes('not found in') && e.message.includes('app.asar')) {
                return true
            }
        }
        return false
};
