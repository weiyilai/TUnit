﻿using TUnit.Assertions.AssertConditions;
using TUnit.Assertions.AssertConditions.Interfaces;

namespace TUnit.Assertions.Assertions.Generics.Conditions;

public class DelegateConversionAssertionCondition<TToType>(
    IDelegateSource source,
    BaseAssertCondition<object?> assertCondition) : BaseAssertCondition<TToType> where TToType : Exception
{
    protected override string GetExpectation() => assertCondition.Expectation;

    protected override async ValueTask<AssertionResult> GetResult(
        TToType? actualValue, Exception? exception,
        AssertionMetadata assertionMetadata
    )
    {
        return await assertCondition.GetAssertionResult(await source.AssertionDataTask);
    }
}