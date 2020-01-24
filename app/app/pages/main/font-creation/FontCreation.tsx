import React, { FunctionComponent, useState } from 'react';
import { SparkPageContainer } from '../../../atoms/SparkPageContainer';
import { SparkProgressBar } from '../../../atoms/SparkProgressBar';
import { Introduction } from './introduction/Introduction';
import { Create } from './create/Create';
import { Complete } from './complete/Complete';

export const FontCreation: FunctionComponent<any> = (props) => {
	const [currentStep, setCurrentStep] = useState(1);

	return (
		<SparkPageContainer>
			<SparkProgressBar
				totalSteps={3}
				currentStep={currentStep}
				stepLabels={['Options', 'Draw letters', 'Save font']}
			/>
			{currentStep === 1 && (
				<Introduction goToNextStep={() => setCurrentStep(2)} />
			)}
			{currentStep === 2 && <Create goToNextStep={() => setCurrentStep(3)} />}
			{currentStep === 3 && <Complete />}
		</SparkPageContainer>
	);
};
