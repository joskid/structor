/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {combineReducers} from 'redux';

import appContainerReducer from '../controllers/app/AppContainer/reducer.js';
import appSpinnerReducer from '../controllers/app/AppSpinner/reducer.js';
import appMessageReducer from '../controllers/app/AppMessage/reducer.js';
import deskReducer from '../controllers/workspace/Desk/reducer.js';
import deskPageReducer from '../controllers/workspace/DeskPage/reducer.js';
import toolbarLeftReducer from '../controllers/workspace/ToolbarLeft/reducer.js';
import toolbarTopReducer from '../controllers/workspace/ToolbarTop/reducer.js';
import pageListControlsReducer from '../controllers/workspace/PageListControls/reducer.js';
import pageViewControlsReducer from '../controllers/workspace/PageViewControls/reducer.js';
import pageOptionsModalReducer from '../controllers/workspace/PageOptionsModal/reducer.js';
import pageTreeViewPanelReducer from '../controllers/workspace/PageTreeViewPanel/reducer.js';
import toolbarSelectionReducer from '../controllers/workspace/ToolbarSelection/reducer.js';
import selectionBreadcrumbsReducer from '../controllers/workspace/SelectionBreadcrumbs/reducer.js';
import selectionControlsReducer from '../controllers/workspace/SelectionControls/reducer.js';
import clipboardControlsReducer from '../controllers/workspace/ClipboardControls/reducer.js';
import clipboardIndicatorReducer from '../controllers/workspace/ClipboardIndicator/reducer.js';
import historyControlsReducer from '../controllers/workspace/HistoryControls/reducer.js';
import libraryPanelReducer from '../controllers/workspace/LibraryPanel/reducer.js';
import componentOptionsModalReducer from '../controllers/workspace/ComponentOptionsModal/reducer.js';
import componentControlsReducer from '../controllers/workspace/ComponentControls/reducer.js';
import componentOptionsPanelReducer from '../controllers/workspace/ComponentOptionsPanel/reducer.js';
import generatorReducer from '../controllers/generator/Generator/reducer.js';
import generatorListReducer from '../controllers/generator/GeneratorList/reducer.js';
import generatorBriefPanelReducer from '../controllers/generator/GeneratorBriefPanel/reducer.js';
import metadataFormReducer from '../controllers/generator/MetadataForm/reducer.js';
import signInModalReducer from '../controllers/app/SignInModal/reducer.js';
import sourceFilesListReducer from '../controllers/generator/SourceFilesList/reducer.js';
import sandboxReducer from '../controllers/sandbox/Sandbox/reducer.js';
import generatorCardReducer from '../controllers/sandbox/GeneratorCard/reducer.js';
import generatorTemplateReducer from '../controllers/sandbox/GeneratorTemplate/reducer.js';
import sandboxFilesListReducer from '../controllers/sandbox/SandboxFilesList/reducer.js';
import proxySetupModalReducer from '../controllers/app/ProxySetupModal/reducer.js';
import projectGalleryReducer from '../controllers/app/ProjectGallery/reducer.js';

const reducer = combineReducers({
    appContainer: appContainerReducer,
    appSpinner: appSpinnerReducer,
    appMessage: appMessageReducer,
    desk: deskReducer,
    deskPage: deskPageReducer,
    toolbarLeft: toolbarLeftReducer,
    toolbarTop: toolbarTopReducer,
    pageListControls: pageListControlsReducer,
    pageViewControls: pageViewControlsReducer,
    pageOptionsModal: pageOptionsModalReducer,
    pageTreeViewPanel: pageTreeViewPanelReducer,
    toolbarSelection: toolbarSelectionReducer,
    selectionBreadcrumbs: selectionBreadcrumbsReducer,
    selectionControls: selectionControlsReducer,
    clipboardControls: clipboardControlsReducer,
    clipboardIndicator: clipboardIndicatorReducer,
    historyControls: historyControlsReducer,
    libraryPanel: libraryPanelReducer,
    componentOptionsModal: componentOptionsModalReducer,
    componentControls: componentControlsReducer,
    componentOptionsPanel: componentOptionsPanelReducer,
    generator: generatorReducer,
    generatorList: generatorListReducer,
    generatorBriefPanel: generatorBriefPanelReducer,
    metadataForm: metadataFormReducer,
    signInModal: signInModalReducer,
    sourceFilesList: sourceFilesListReducer,
    sandbox: sandboxReducer,
    generatorCard: generatorCardReducer,
    generatorTemplate: generatorTemplateReducer,
    sandboxFilesList: sandboxFilesListReducer,
    proxySetupModal: proxySetupModalReducer,
    projectGallery: projectGalleryReducer
});

export default reducer;
